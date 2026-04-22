import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSubscriptionStore = defineStore('subscription', () => {
  const selectedPlanId = ref('starter')
  const allPlans = ref(null)
  const isLoading = ref(false)

  const currentPlan = computed(() => {
    if (!allPlans.value) return null
    return allPlans.value[selectedPlanId.value]
  })

  function setPlanId(id: string) {
    selectedPlanId.value = id
  }

  async function fetchPlans() {
    if (allPlans.value) return
    isLoading.value = true
    try {
      const response = await $fetch('/api/plans')
      allPlans.value = response
    } finally {
      isLoading.value = false
    }
  }

  return {
    selectedPlanId,
    allPlans,
    isLoading,
    currentPlan,
    setPlanId,
    fetchPlans
  }
})
