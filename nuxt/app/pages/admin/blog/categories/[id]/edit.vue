<template>
  <div class="container mx-auto p-4 max-w-2xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Редагувати категорію</h1>
      <UButton to="/BlogCategoriesUi" color="gray" variant="ghost" icon="i-heroicons-arrow-left">
        Назад
      </UButton>
    </div>

    <div v-if="loadingData" class="text-center py-10 text-gray-500">
      Завантаження даних...
    </div>

    <!-- ВИПРАВЛЕНО ДИЗАЙН: Додано підтримку темної теми (dark:bg-gray-800) -->
    <div v-else class="bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg p-6">
      <UForm :schema="schema" :state="state" @submit="onSubmit" class="flex flex-col gap-6 w-full">

        <UFormField label="Назва категорії" name="title">
          <UInput v-model="state.title" class="w-full" size="md" />
        </UFormField>

        <UFormField label="Slug" name="slug">
          <UInput v-model="state.slug" class="w-full" size="md" />
        </UFormField>

        <UFormField label="ID Батьківської категорії" name="parent_id">
          <UInput v-model="state.parent_id" type="number" class="w-full" size="md" />
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
const categoryId = route.params.id;

const schema = z.object({
  title: z.string().min(3, 'Назва має містити мінімум 3 символи'),
  slug: z.string().min(3, 'Slug має містити мінімум 3 символи'),
  parent_id: z.coerce.number().optional().nullable()
});

const state = reactive({
  title: '',
  slug: '',
  parent_id: null as number | null
});

const pending = ref(false);
const loadingData = ref(true);

const fetchCategory = async () => {
  try {
    const response = await $fetch<any>(`http://localhost/api/admin/blog/categories/${categoryId}`);
    const category = response.data || response;

    state.title = category.title || '';
    state.slug = category.slug || '';
    state.parent_id = category.parent_id || null;
  } catch (error) {
    alert('Категорію не знайдено');
  } finally {
    loadingData.value = false;
  }
};

const onSubmit = async () => {
  pending.value = true;
  try {
    await $fetch(`http://localhost/api/admin/blog/categories/${categoryId}`, {
      method: 'PUT',
      body: state
    });
    alert('Категорію успішно оновлено!');
    navigateTo('/BlogCategoriesUi');
  } catch (error) {
    alert('Помилка оновлення');
  } finally {
    pending.value = false;
  }
};

onMounted(() => {
  fetchCategory();
});
</script>
