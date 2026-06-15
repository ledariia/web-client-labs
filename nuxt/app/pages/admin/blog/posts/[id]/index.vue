<template>
  <div class="container mx-auto p-4 max-w-4xl">
    <div v-if="pending" class="text-center py-10 text-gray-500">
      Завантаження поста...
    </div>

    <div v-else-if="post" class="bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg p-8">
      <h1 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{{ post.title }}</h1>

      <div class="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-6 bg-gray-50 dark:bg-gray-700/50 p-3 rounded ring-1 ring-gray-200 dark:ring-gray-600">
        <span><strong class="text-gray-900 dark:text-white">ID:</strong> {{ post.id }}</span>
        <span><strong class="text-gray-900 dark:text-white">Автор:</strong> {{ post.user?.name || 'Невідомий автор' }}</span>
        <span><strong class="text-gray-900 dark:text-white">Категорія:</strong> {{ post.category?.title || 'Без категорії' }}</span>
        <span><strong class="text-gray-900 dark:text-white">Дата:</strong> {{ post.date_published || '—' }}</span>
      </div>

      <div class="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 line-clamp-none whitespace-pre-wrap">
        {{ post.content_raw || post.excerpt || 'Текст статті відсутній у базі даних.' }}
      </div>

      <div class="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button @click="$router.back()" class="text-blue-500 dark:text-blue-400 hover:underline">
          &larr; Назад до списку
        </button>
      </div>
    </div>

    <div v-else class="text-center py-10 text-red-500 font-bold">
      Пост не знайдено або сталася помилка.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const postId = route.params.id;

const post = ref<any>(null);
const pending = ref(true);

const fetchSinglePost = async () => {
  try {
    const response = await $fetch<any>(`http://localhost/api/admin/blog/posts/${postId}`);
    post.value = response.data || response;
  } catch (error) {
    console.error(`Помилка завантаження посту #${postId}:`, error);
  } finally {
    pending.value = false;
  }
};

onMounted(() => {
  fetchSinglePost();
});
</script>
