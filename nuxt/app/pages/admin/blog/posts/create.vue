<template>
  <div class="container mx-auto p-4 max-w-3xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Створити новий пост</h1>
      <UButton to="/BlogPostsUi" color="gray" variant="ghost" icon="i-heroicons-arrow-left">
        Назад
      </UButton>
    </div>

    <div class="bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg p-6">
      <UForm :schema="schema" :state="state" @submit="onSubmit" class="flex flex-col gap-6 w-full">

        <UFormField label="Заголовок" name="title">
          <UInput v-model="state.title" placeholder="Заголовок статті..." class="w-full" size="md" />
        </UFormField>

        <UFormField label="Slug" name="slug">
          <UInput v-model="state.slug" placeholder="slug-statti..." class="w-full" size="md" />
        </UFormField>

        <UFormField label="Текст статті" name="content_raw">
          <UTextarea v-model="state.content_raw" :rows="6" placeholder="Напишіть щось цікаве..." class="w-full" size="md" />
        </UFormField>

        <UFormField label="Категорія (ID)" name="category_id">
          <UInput v-model="state.category_id" type="number" placeholder="Наприклад: 1" class="w-full" size="md" />
        </UFormField>

        <div class="flex justify-end pt-5 border-t border-gray-200 dark:border-gray-700 mt-2">
          <UButton type="submit" color="primary" size="md" :loading="pending">
            Опублікувати
          </UButton>
        </div>

      </UForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { z } from 'zod';

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

const onSubmit = async () => {
  pending.value = true;
  try {
    await $fetch('http://localhost/api/admin/blog/posts', {
      method: 'POST',
      body: state
    });
    alert('Пост успішно створено!');
    navigateTo('/BlogPostsUi');
  } catch (error: any) {
    alert('Помилка збереження. Перевірте, чи не зайнятий такий Slug!');
  } finally {
    pending.value = false;
  }
};
</script>
