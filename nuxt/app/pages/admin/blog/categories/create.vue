<template>
  <div class="container mx-auto p-4 max-w-2xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Створити категорію</h1>
      <UButton to="/BlogCategoriesUi" color="gray" variant="ghost" icon="i-heroicons-arrow-left">
        Назад
      </UButton>
    </div>

    <div class="bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg p-6">
      <UForm :schema="schema" :state="state" @submit="onSubmit" class="flex flex-col gap-6 w-full">

        <UFormField label="Назва категорії" name="title">
          <UInput v-model="state.title" placeholder="Наприклад: Новини IT..." class="w-full" size="md" />
        </UFormField>

        <UFormField label="Slug" name="slug">
          <UInput v-model="state.slug" placeholder="novyny-it..." class="w-full" size="md" />
        </UFormField>

        <UFormField label="ID Батьківської категорії" name="parent_id">
          <UInput v-model="state.parent_id" type="number" placeholder="Залиште пустим або введіть ID" class="w-full" size="md" />
        </UFormField>

        <div class="flex justify-end pt-5 border-t border-gray-200 dark:border-gray-700 mt-2">
          <UButton type="submit" color="primary" size="md" :loading="pending">
            Зберегти
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
  title: z.string().min(3, 'Назва має містити мінімум 3 символи'),
  slug: z.string().min(3, 'Slug має містити мінімум 3 символи'),
  parent_id: z.coerce.number().optional().nullable()
});

const state = reactive({
  title: '',
  slug: '',
  parent_id: null
});

const pending = ref(false);

const onSubmit = async () => {
  pending.value = true;
  try {
    await $fetch('http://localhost/api/admin/blog/categories', {
      method: 'POST',
      body: state
    });
    alert('Категорію успішно створено!');
    navigateTo('/BlogCategoriesUi');
  } catch (error) {
    alert('Помилка збереження. Перевірте унікальність Slug!');
  } finally {
    pending.value = false;
  }
};
</script>
