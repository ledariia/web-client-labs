<template>
  <div class="container mx-auto p-4 max-w-3xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Редагувати пост</h1>
      <UButton to="/BlogPostsUi" color="gray" variant="ghost" icon="i-heroicons-arrow-left">
        Назад
      </UButton>
    </div>

    <div v-if="loadingData" class="text-center py-10 text-gray-500">
      Завантаження даних...
    </div>

    <div v-else class="bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg p-6">
      <UForm :schema="schema" :state="state" @submit="onSubmit" class="flex flex-col gap-6 w-full">

        <UFormField label="Заголовок" name="title">
          <UInput v-model="state.title" class="w-full" size="md" />
        </UFormField>

        <UFormField label="Slug" name="slug">
          <UInput v-model="state.slug" class="w-full" size="md" />
        </UFormField>

        <UFormField label="Текст статті" name="content_raw">
          <UTextarea v-model="state.content_raw" :rows="6" class="w-full" size="md" />
        </UFormField>

        <UFormField label="Категорія (ID)" name="category_id">
          <UInput v-model="state.category_id" type="number" class="w-full" size="md" />
        </UFormField>

        <div class="flex justify-end pt-5 border-t border-gray-200 dark:border-gray-700 mt-2">
          <UButton type="submit" color="primary" size="md" :loading="pending">
            Зберегти зміни
          </UButton>
        </div>

      </UForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { z } from 'zod';

const route = useRoute();
const postId = route.params.id;

const schema = z.object({
  title: z.string().min(5, 'Заголовок має містити мінімум 5 символів'),
  slug: z.string().min(3, 'Slug має містити мінімум 3 символи'),
  content_raw: z.string().min(10, 'Текст має містити мінімум 10 символів'),
  category_id: z.coerce.number().min(1, 'Вкажіть ID категорії')
});

const state = reactive({
  title: '',
  slug: '',
  content_raw: '',
  category_id: 1
});

const pending = ref(false);
const loadingData = ref(true);

const fetchPost = async () => {
  try {
    const response = await $fetch<any>(`http://localhost/api/admin/blog/posts/${postId}`);
    const post = response.data || response;

    state.title = post.title || '';
    state.slug = post.slug || '';
    state.content_raw = post.content_raw || '';
    state.category_id = post.category_id || 1;
  } catch (error) {
    alert('Пост не знайдено');
  } finally {
    loadingData.value = false;
  }
};

const onSubmit = async () => {
  pending.value = true;
  try {
    await $fetch(`http://localhost/api/admin/blog/posts/${postId}`, {
      method: 'PUT',
      body: state
    });
    alert('Пост успішно оновлено!');
    navigateTo('/BlogPostsUi');
  } catch (error) {
    alert('Помилка оновлення');
  } finally {
    pending.value = false;
  }
};

onMounted(() => {
  fetchPost();
});
</script>
