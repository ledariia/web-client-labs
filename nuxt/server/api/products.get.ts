export default defineEventHandler(async () => {
  const data: any = await $fetch('https://dummyjson.com/products?limit=100')
  return data.products || []
})
