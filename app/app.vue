<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Global SEO
useHead({
  title: 'Loktar - Таргетологи рейтинг',
  meta: [
    { name: 'description', content: 'Рейтинг таргетологов и агентств' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})

// Initialize theme
const themeStore = useThemeStore()
onMounted(() => {
  themeStore.initTheme()
})
</script>
