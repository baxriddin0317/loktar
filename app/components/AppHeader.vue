<template>
  <header class=" max-w-8xl w-full h-[336px] mx-auto px-5 pt-6">
    <!-- Background images -->
    <img src="/header-bg.png" alt="Header background" class="absolute inset-0 w-full h-[336px] object-cover z-0 hidden dark:block" />
    <img src="/header-bg-dark.png" alt="Header background dark" class="absolute inset-0 w-full h-[336px] object-cover z-0  dark:hidden" />
    
    <div class="flex items-center justify-between relative z-10">
      <div>

      </div>
      <div class="flex items-center gap-3 ml-auto">
        <p class="hidden md:block text-brand-main dark:bg-[linear-gradient(104deg,#fff_6.29%,#2F2E37_147.61%)] dark:bg-clip-text dark:text-transparent">
          Сменить тему
        </p>
        <button @click="themeStore.toggleTheme()" class="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55469 1.25L7.30648 2.5H5.02602C3.05703 2.5 2.72875 2.5168 2.62273 2.62273C2.5168 2.72875 2.5 3.05664 2.5 5.02211V7.29875L1.25 8.55703C0.343125 9.47 0 9.86609 0 10C0 10.1339 0.343125 10.53 1.25 11.443L2.5 12.7013V14.9713C2.5 17.0713 2.5107 17.2511 2.64289 17.3707C2.76891 17.4848 3.05219 17.5 5.04227 17.5H7.29875L8.55703 18.75C9.47 19.6569 9.86609 20 10 20C10.1339 20 10.53 19.6569 11.443 18.75L12.7013 17.5H14.9713C17.0713 17.5 17.2511 17.4893 17.3707 17.3571C17.4848 17.2311 17.5 16.9478 17.5 14.9577V12.7013L18.75 11.443C19.6569 10.53 20 10.1339 20 10C20 9.86609 19.6569 9.47 18.75 8.55703L17.5 7.29875V5.02211C17.5 3.05664 17.4832 2.72875 17.3773 2.62273C17.2712 2.5168 16.9434 2.5 14.9779 2.5H12.7013L11.443 1.25C10.5066 0.319844 10.1358 0 9.99375 0C9.85125 0 9.48625 0.317109 8.55469 1.25ZM9.81867 4.2557L9.64844 4.34055L9.62836 9.97281C9.6107 14.9538 9.62219 15.6165 9.72813 15.7044C9.89914 15.8463 10.7362 15.8063 11.4579 15.6218C14.0364 14.9623 15.7878 12.6884 15.7878 10C15.7878 7.455 14.2462 5.2975 11.8548 4.49578C11.1387 4.2557 10.0712 4.12977 9.81867 4.2557Z" fill="url(#paint0_linear_1688_7694)"/>
            <defs>
            <linearGradient id="paint0_linear_1688_7694" x1="3.57042e-07" y1="-9.28571" x2="10.8687" y2="30.0467" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#2F2E37"/>
            </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </div>

    <div class="relative flex flex-col items-center justify-center z-10">
      <Logo :width="78" :height="79" />
    </div>
  </header>
</template>

<script setup>
const themeStore = useThemeStore()

// Initialize theme on mount
onMounted(() => {
  themeStore.initTheme()
})
</script>


