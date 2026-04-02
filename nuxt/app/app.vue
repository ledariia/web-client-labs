<template>
  <UApp>
    <ClientOnly>
      <NuxtPage />

      <template #fallback>
        <p>Завантаження...</p>
      </template>
    </ClientOnly>
  </UApp>
</template>
