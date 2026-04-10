export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('Нова підписка оформлена:', body)

  return {
    success: true,
    message: 'Підписку успішно оформлено!',
    orderId: Math.floor(Math.random() * 1000000),
    data: body
  }
})
