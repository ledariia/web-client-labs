<template>
  <div class="p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
    <Head>
      <Title>Оплата підписки</Title>
    </Head>

    <div class="max-w-[1000px] mx-auto mb-6 flex justify-start">
      <NuxtLink to="/" class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-bold shadow-sm hover:bg-gray-100 transition">
        ⬅ Назад до тарифів
      </NuxtLink>
    </div>

    <div v-if="isLoading" class="text-center py-20 text-gray-500">Завантаження даних...</div>

    <section v-else-if="currentPlan" class="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[340px_1fr] gap-8 items-start">

      <div class="relative bg-white rounded-xl shadow-xl w-full border border-gray-100 overflow-hidden">
        <div :class="['h-1.5 w-full', currentPlan.colorClass]"></div>
        <div class="p-8 grid gap-0">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ currentPlan.name }}</h2>
          <div class="justify-self-start bg-gray-100 text-gray-500 text-[11px] font-bold px-2 py-1 rounded mb-4">
            3-days free then:
          </div>
          <div class="grid grid-cols-[auto_auto] items-baseline justify-start gap-1 mb-1">
            <span class="text-4xl font-extrabold text-gray-900">${{ currentPlan.price }}</span>
            <span class="text-gray-400 text-sm">/month</span>
          </div>
          <p class="text-[13px] text-gray-400 mb-2 font-medium">
            billed yearly at ${{ currentPlan.annualPrice }}
          </p>
          <div class="justify-self-start bg-green-100 text-green-700 text-[12px] font-bold px-3 py-1.5 rounded-full mb-8">
            ${{ currentPlan.savings }} in savings
          </div>
          <hr class="border-gray-50 mb-8">
          <ul class="grid gap-5">
            <li v-for="(feature, idx) in currentPlan.features" :key="idx" class="grid grid-cols-[20px_1fr] gap-3 items-start text-[14px]">
              <svg class="w-5 h-5 text-green-400 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <div class="grid gap-1">
                <span class="font-semibold text-gray-700" v-html="feature.text"></span>
                <span v-if="feature.subtext" class="text-[12px] text-gray-400 font-medium">{{ feature.subtext }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">

        <h3 class="text-lg font-bold text-gray-800 mb-6">Order Summary</h3>
        <div class="space-y-4 mb-6 text-sm">
          <div class="flex justify-between items-center text-gray-700 font-medium">
            <span>Annual Plan</span>
            <span>${{ currentPlan.annualPrice.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between items-center text-gray-500 text-xs">
            <span>Total Due <span class="italic">(*not including sales tax where applicable)</span></span>
            <span class="text-sm font-medium">${{ currentPlan.annualPrice.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between items-center text-gray-800 font-bold mt-4 pt-4 border-t border-gray-100">
            <span>Due Today</span>
            <span>$0.00</span>
          </div>
        </div>

        <div class="bg-gray-100 text-center py-3 rounded-md text-gray-600 font-semibold text-sm mb-8">
          Includes 3-Day Free Trial
        </div>

        <form @submit.prevent="submitOrder">
          <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            Billing Information
            <span class="text-gray-400 cursor-help" title="Secure payment">ⓘ</span>
          </h3>

          <div class="space-y-4 mb-6">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">Card Details</label>
              <div class="flex border border-gray-300 rounded-md overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                <div class="flex-1 px-3 py-2 border-r border-gray-300 flex items-center gap-2">
                  <span class="text-gray-400">💳</span>
                  <input type="text" v-model="formData.cardNumber" placeholder="Number" required class="w-full outline-none text-sm text-black font-medium" />
                </div>
                <input type="text" v-model="formData.expiry" placeholder="MM / YY" required class="w-24 px-3 py-2 border-r border-gray-300 outline-none text-sm text-center text-black font-medium" />
                <input type="text" v-model="formData.cvc" placeholder="CVC" required class="w-20 px-3 py-2 outline-none text-sm text-center text-black font-medium" />
              </div>
            </div>

            <div class="border border-gray-300 rounded-md p-4 bg-gray-50/50 space-y-4">
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Billing Address</p>

              <div>
                <label class="block text-xs font-semibold text-gray-600 mb-1">Full name</label>
                <input type="text" v-model="formData.fullName" placeholder="Enter your full name" required class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black font-medium outline-none focus:border-blue-500" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-600 mb-1">Address</label>
                <input type="text" v-model="formData.address" placeholder="Enter your address" required class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black font-medium outline-none focus:border-blue-500" />
              </div>
            </div>
          </div>

          <div class="flex items-start gap-3 mb-6">
            <input type="checkbox" v-model="formData.consent" required id="consent" class="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
            <label for="consent" class="text-xs text-gray-600 leading-tight">
              I consent to <a href="#" class="font-bold underline text-gray-700">Terms of Use</a> and understand my 3-day free trial will automatically convert to ${{ currentPlan.annualPrice.toFixed(2) }} per year...
            </label>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="px-8 py-3 bg-orange-500 text-white font-bold text-sm rounded-md border border-transparent hover:bg-orange-600 transition-all disabled:opacity-50 disabled:bg-gray-300"
          >
            {{ isSubmitting ? 'Processing...' : 'Try It Free' }}
          </button>

          <p v-if="successMessage" class="mt-4 text-green-600 font-bold text-sm">{{ successMessage }}</p>
        </form>

      </div>
    </section>

    <div v-else class="text-center py-20 text-red-500">План не знайдено!</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useSubscriptionStore } from '~/stores/useSubscriptionStore'
const route = useRoute()
const subStore = useSubscriptionStore()
const { currentPlan, isLoading, selectedPlanId } = storeToRefs(subStore)

const formData = ref({
  cardNumber: '',
  expiry: '',
  cvc: '',
  fullName: '',
  address: '',
  consent: false
})

const isSubmitting = ref(false)
const successMessage = ref('')

onMounted(() => {
  if (route.query.plan) {
    subStore.setPlanId(route.query.plan)
  }
  if (!subStore.allPlans) {
    subStore.fetchPlans()
  }
})

const submitOrder = async () => {
  isSubmitting.value = true
  successMessage.value = ''

  try {
    const response = await $fetch('/api/subscription/create', {
      method: 'POST',
      body: {
        planId: selectedPlanId.value,
        ...formData.value
      }
    })

    if (response.success) {
      successMessage.value = response.message
      formData.value.cardNumber = ''
      formData.value.expiry = ''
      formData.value.cvc = ''
    }
  } catch (error) {
    console.error('Помилка відправки:', error)
    alert('Сталася помилка при оформленні підписки')
  } finally {
    isSubmitting.value = false
  }
}
</script>
