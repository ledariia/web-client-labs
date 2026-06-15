<template>
  <div class="container mx-auto p-4 max-w-5xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Блог - Категорії</h1>
      <UButton to="/admin/blog/categories/create" color="primary" icon="i-heroicons-plus">
        Створити категорію
      </UButton>
    </div>

    <div class="bg-white dark:bg-gray-900 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg p-4">
      <UTable :columns="columns" :rows="categories" :data="categories" :loading="pending">

        <template #id-header><b>#</b></template>
        <template #title-header><b>Назва</b></template>
        <template #slug-header><b>Slug</b></template>
        <template #actions-header><b>Дії</b></template>

        <template #slug-data="{ row }">
          <span class="text-gray-500 dark:text-gray-400">{{ row.slug || '—' }}</span>
        </template>
        <template #slug-cell="{ row }">
          <span class="text-gray-500 dark:text-gray-400">{{ row.original?.slug || row.slug || '—' }}</span>
        </template>

        <template #actions-data="{ row }">
          <UDropdownMenu :items="getDropdownItems(row)">
            <UButton color="gray" variant="ghost" label="Опції" trailing-icon="i-heroicons-chevron-down-20-solid" />
          </UDropdownMenu>
        </template>

        <template #actions-cell="{ row }">
          <UDropdownMenu :items="getDropdownItems(row.original || row)">
            <UButton color="gray" variant="ghost" label="Опції" trailing-icon="i-heroicons-chevron-down-20-solid" />
          </UDropdownMenu>
        </template>

      </UTable>

      <div class="flex justify-end mt-4 border-t border-gray-200 dark:border-gray-800 pt-4">
        <UPagination
          v-model="page"
          :page-count="perPage"
          :items-per-page="perPage"
          :total="total"
          @update:model-value="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const columns = [
  { id: 'id', key: 'id', accessorKey: 'id', label: '#', header: '#' },
  { id: 'title', key: 'title', accessorKey: 'title', label: 'Назва', header: 'Назва' },
  { id: 'slug', key: 'slug', accessorKey: 'slug', label: 'Slug', header: 'Slug' },
  { id: 'actions', key: 'actions', accessorKey: 'actions', label: 'Дії', header: 'Дії' }
];

const categories = ref<any[]>([]);
const pending = ref(false);

const page = ref(1);
const total = ref(0);
const perPage = ref(10);

const getDropdownItems = (row: any) => [
  [{
    label: 'Редагувати',
    icon: 'i-heroicons-pencil-square',
    onSelect: () => navigateTo(`/admin/blog/categories/${row.id}/edit`)
  }],
  [{
    label: 'Видалити',
    icon: 'i-heroicons-trash',
    class: 'text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20',
    onSelect: () => deleteCategory(row.id)
  }]
];

const fetchCategories = async () => {
  pending.value = true;
  try {
    // Надійний спосіб передачі параметра сторінки для Nuxt
    const response = await $fetch<any>('http://localhost/api/admin/blog/categories', {
      query: { page: page.value }
    });

    const dataArray = response.data?.data || response.data || [];
    categories.value = Array.isArray(dataArray) ? dataArray : [];

    total.value = response.meta?.total || response.total || categories.value.length || 0;
    perPage.value = response.meta?.per_page || response.per_page || 10;
  } catch (error) {
    console.error("Помилка API:", error);
  } finally {
    pending.value = false;
  }
};

// НОВА ФУНКЦІЯ: Явно вказує Nuxt, що робити при натисканні на сторінку
const handlePageChange = (newPage: number) => {
  page.value = newPage;
  fetchCategories();
  // Додаємо плавний скрол нагору після перемикання сторінки
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const deleteCategory = async (id: number) => {
  if (!confirm('Видалити цю категорію назавжди?')) return;
  try {
    await $fetch(`http://localhost/api/admin/blog/categories/${id}`, { method: 'DELETE' });
    alert('Категорію видалено!');

    if (categories.value.length === 1 && page.value > 1) {
      page.value--;
    }
    fetchCategories();
  } catch (error) {
    alert('Помилка при видаленні!');
  }
};

// Завантажуємо першу сторінку
fetchCategories();
</script>
