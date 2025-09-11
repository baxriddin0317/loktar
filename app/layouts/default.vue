<template>
  <div 
    class="min-h-screen h-full transition-colors duration-300"
    :class="themeStore.isDark ? 'bg-brand-black' : 'bg-[linear-gradient(178deg,#F6F6F6_0%,#F5F6F8_46.61%)]'"
  >
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const themeStore = useThemeStore()
</script>

