<template>
  <div class="container mx-auto p-4 max-w-6xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Блог - Пости</h1>
      <UButton to="/admin/blog/posts/create" color="primary" icon="i-heroicons-plus">
        Створити пост
      </UButton>
    </div>

    <div class="bg-white dark:bg-gray-900 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg p-4">
      <UTable :columns="columns" :rows="posts" :data="posts" :loading="pending">

        <template #title-data="{ row }">
          <NuxtLink :to="'/admin/blog/posts/' + row.id" class="text-blue-500 dark:text-blue-400 hover:underline">
            {{ row.title }}
          </NuxtLink>
        </template>
        <template #title-cell="{ row }">
          <NuxtLink :to="'/admin/blog/posts/' + (row.original?.id || row.id)" class="text-blue-500 dark:text-blue-400 hover:underline">
            {{ row.original?.title || row.title }}
          </NuxtLink>
        </template>

        <template #user-data="{ row }">
          <span class="text-gray-700 dark:text-gray-300">{{ row.user?.name || 'Невідомий автор' }}</span>
        </template>
        <template #user-cell="{ row }">
          <span class="text-gray-700 dark:text-gray-300">{{ row.original?.user?.name || row.user?.name || 'Невідомий автор' }}</span>
        </template>

        <template #category-data="{ row }">
          <span class="text-gray-700 dark:text-gray-300">{{ row.category?.title || 'Без категорії' }}</span>
        </template>
        <template #category-cell="{ row }">
          <span class="text-gray-700 dark:text-gray-300">{{ row.original?.category?.title || row.category?.title || 'Без категорії' }}</span>
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
  { id: 'user', key: 'user', accessorKey: 'user', label: 'Автор', header: 'Автор' },
  { id: 'category', key: 'category', accessorKey: 'category', label: 'Категорія', header: 'Категорія' },
  { id: 'title', key: 'title', accessorKey: 'title', label: 'Заголовок', header: 'Заголовок' },
  { id: 'date_published', key: 'date_published', accessorKey: 'date_published', label: 'Дата публікації', header: 'Дата публікації' },
  { id: 'actions', key: 'actions', accessorKey: 'actions', label: 'Дії', header: 'Дії' }
];

const posts = ref<any[]>([]);
const pending = ref(false);

const page = ref(1);
const total = ref(0);
const perPage = ref(10);

const getDropdownItems = (row: any) => [
  [{
    label: 'Редагувати',
    icon: 'i-heroicons-pencil-square',
    onSelect: () => navigateTo(`/admin/blog/posts/${row.id}/edit`)
  }],
  [{
    label: 'Видалити',
    icon: 'i-heroicons-trash',
    class: 'text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20',
    onSelect: () => deletePost(row.id)
  }]
];

const fetchPosts = async () => {
  pending.value = true;
  try {
    const response = await $fetch<any>('http://localhost/api/admin/blog/posts', {
      query: { page: page.value }
    });

    // Адаптація під структуру Laravel API Resources
    posts.value = response.data || [];
    total.value = response.meta?.total || 0;
    perPage.value = response.meta?.per_page || 10;
  } catch (error) {
    console.error("Помилка завантаження:", error);
  } finally {
    pending.value = false;
  }
};

const handlePageChange = (newPage: number) => {
  page.value = newPage;
  fetchPosts();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const deletePost = async (id: number) => {
  if (!confirm('Видалити цей пост назавжди?')) return;
  try {
    await $fetch(`http://localhost/api/admin/blog/posts/${id}`, { method: 'DELETE' });
    alert('Пост успішно видалено!');
    if (posts.value.length === 1 && page.value > 1) {
      page.value--;
    }
    fetchPosts();
  } catch (error) {
    alert('Помилка при видаленні!');
    console.error(error);
  }
};

fetchPosts();
</script>
