<template>
  <div class="p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
    <Head>
      <Title>Таблиця</Title>
    </Head>

    <div class="w-full max-w-[98%] mx-auto mb-6 flex justify-start">
      <NuxtLink to="/" class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-bold shadow-sm hover:bg-gray-100 transition">
        ⬅ Назад до Списку
      </NuxtLink>
    </div>

    <section class="w-full max-w-[98%] mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div class="p-4 border-b border-gray-200 flex justify-end">
        <UInput v-model="searchQuery" icon="i-heroicons-magnifying-glass" placeholder="Пошук продуктів..." />
      </div>

      <UTable
        :data="paginatedRows"
        :columns="columns"
        :loading="pending"
        class="w-full"
        :ui="{
          thead: 'bg-gray-50 border-b border-gray-200 text-gray-500 text-xs font-semibold uppercase tracking-wider',
          tr: { base: 'hover:bg-gray-100 transition-colors text-sm' }
        }"
      >
        <template #thumbnail-cell="{ row }"><img :src="row.original?.thumbnail || row.thumbnail" alt="Фото" class="w-[100px] h-[100px] object-cover rounded shadow-sm border border-gray-100" /></template>
        <template #title-cell="{ row }"><span class="text-blue-600 font-bold uppercase underline decoration-1 underline-offset-2">{{ row.original?.title || row.title }}</span></template>
        <template #rating-cell="{ row }"><span :class="(row.original?.rating || row.rating) < 4.5 ? 'text-red-500 font-bold' : 'text-green-500 font-bold'">{{ row.original?.rating || row.rating }}</span></template>
        <template #description-cell="{ row }"><span class="text-gray-600 line-clamp-2" :title="row.original?.description || row.description">{{ row.original?.description || row.description }}</span></template>
        <template #price-cell="{ row }"><span class="text-gray-700 font-medium">${{ row.original?.price || row.price }}</span></template>
      </UTable>

      <div class="p-4 border-t border-gray-100 flex justify-between items-center bg-white">
        <span class="text-xs text-gray-400 font-medium">Сторінка: {{ page }}</span>

        <UPagination
          v-model:page="page"
          :total="filteredAndSortedRows.length"
          :items-per-page="5"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const products = ref([])
const pending = ref(true)

onMounted(async () => {
  try {
    const res = await $fetch('/api/products')
    products.value = Array.isArray(res) ? res : (res.products || [])
  } catch (error) {
    console.error('Помилка завантаження:', error)
  } finally {
    pending.value = false
  }
})

const searchQuery = ref('')
const page = ref(1)
const sort = ref({ column: 'title', direction: 'asc' })

const columns = [
  { id: 'thumbnail', key: 'thumbnail', accessorKey: 'thumbnail', label: 'Фото', header: 'Фото' },
  { id: 'title', key: 'title', accessorKey: 'title', label: 'Назва', header: 'Назва', sortable: true },
  { id: 'description', key: 'description', accessorKey: 'description', label: 'Опис', header: 'Опис' },
  { id: 'price', key: 'price', accessorKey: 'price', label: 'Ціна', header: 'Ціна', sortable: true },
  { id: 'rating', key: 'rating', accessorKey: 'rating', label: 'Оцінка', header: 'Оцінка', sortable: true },
  { id: 'brand', key: 'brand', accessorKey: 'brand', label: 'Бренд', header: 'Бренд', sortable: true },
  { id: 'category', key: 'category', accessorKey: 'category', label: 'Категорія', header: 'Категорія', sortable: true }
]

const filteredAndSortedRows = computed(() => {
  let result = [...products.value]

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(item => {
      return Object.values(item).some(val => String(val).toLowerCase().includes(q))
    })
  }

  if (sort.value.column) {
    result.sort((a, b) => {
      const aVal = a[sort.value.column]
      const bVal = b[sort.value.column]
      const modifier = sort.value.direction === 'desc' ? -1 : 1

      if (aVal < bVal) return -1 * modifier
      if (aVal > bVal) return 1 * modifier
      return 0
    })
  }

  return result
})

const paginatedRows = computed(() => {
  const start = (page.value - 1) * 5
  return filteredAndSortedRows.value.slice(start, start + 5)
})

watch(searchQuery, () => {
  page.value = 1
})
</script>
