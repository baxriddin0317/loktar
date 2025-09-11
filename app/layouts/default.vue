<template>
  <div 
    class="min-h-screen h-full flex flex-col justify-between transition-colors duration-300"
    :class="themeStore.isDark ? 'bg-brand-black' : 'bg-[linear-gradient(178deg,#F6F6F6_0%,#F5F6F8_46.61%)]'"
  >
    <AppHeader />
    <main class="-translate-y-36">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const themeStore = useThemeStore()
</script>

