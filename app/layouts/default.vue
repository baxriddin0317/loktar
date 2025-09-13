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
    
    <!-- Mobile Filter Modal -->
    <MobileFilterModal 
      :is-open="isMobileFilterOpen" 
      @close="closeMobileFilter" 
    />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import MobileFilterModal from '~/components/MobileFilterModal.vue'

const themeStore = useThemeStore()

// Mobile filter modal state
const isMobileFilterOpen = ref(false)

// Open mobile filter modal
const openMobileFilter = () => {
  isMobileFilterOpen.value = true
}

// Close mobile filter modal
const closeMobileFilter = () => {
  isMobileFilterOpen.value = false
}

// Provide functions to child components
provide('openMobileFilter', openMobileFilter)
</script>

