<template>
  <AppHero />
  <section class="mt-8 lg:mt-20">
    <div class="relative hidden lg:block  max-w-8xl mx-auto w-full h-full">
      <span class="absolute max-w-screen w-full flex justify-start overflow-hidden dark:!bg-transparent left-0 -top-7">
        <svg width="1920" height="99" viewBox="0 0 1920 99" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1962 0.99999L1187.94 0.999989L1160.09 28L946 28" stroke="url(#paint0_radial_5686_3845)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1160.5 38.6207L530.108 38.6207L479.029 38.6207L189 38.6207L162.5 98L-29.7133 98L-99.3711 28L-402 28" stroke="url(#paint1_radial_5686_3845)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
          <radialGradient id="paint0_radial_5686_3845" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1509.85 14.4702) rotate(-90) scale(388.46 400.571)">
          <stop offset="0.00094151" stop-color="#9A6CF4"/>
          <stop offset="1" stop-color="#CF52FE"/>
          </radialGradient>
          <radialGradient id="paint1_radial_5686_3845" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(315.934 63.1182) rotate(-90) scale(297.931 296.474)">
          <stop offset="0.00094151" stop-color="#CF52FE" stop-opacity="0"/>
          <stop offset="1" stop-color="#9A3AE0"/>
          </radialGradient>
          </defs>
        </svg>
      </span>
      <div class="relative z-10 max-w-8xl mx-auto px-5 flex items-center justify-start md:justify-end gap-2">
        <p class="text-brand-main dark:text-brand-gray-1 text-sm leading-[120%]">Как рассчитывается рейтинг</p>
        <span>
          <svg class="fill-[#1F2122] dark:fill-[#92909A]" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M8 0.5C12.4183 0.5 16 4.08172 16 8.5C16 12.9183 12.4183 16.5 8 16.5C3.58172 16.5 0 12.9183 0 8.5C0 4.08172 3.58172 0.5 8 0.5ZM7.55859 7.21875C7.42551 7.23073 7.20166 7.27131 7.06152 7.30859C6.82186 7.37238 6.14542 7.58642 6.12012 7.60645C6.09299 7.63086 5.98187 8.05897 6.00293 8.05859C6.01701 8.05795 6.12821 8.03004 6.25098 7.99609C6.51679 7.9227 6.91445 7.91444 7.08887 7.97852C7.2567 8.04036 7.32124 8.16624 7.32129 8.43457C7.32129 8.70984 7.27462 8.89565 6.94629 9.92969C6.6476 10.8704 6.60616 11.0457 6.60059 11.3926C6.59612 11.6742 6.64464 11.8318 6.79688 12.0283C7.01915 12.315 7.39655 12.4706 7.92578 12.4951C8.38021 12.5161 8.66245 12.4689 9.25488 12.2705L9.75195 12.1035L9.81152 11.9199C9.90686 11.6246 9.90825 11.6275 9.68066 11.6953C9.25634 11.8216 8.79823 11.7967 8.62988 11.6387C8.56414 11.5769 8.54521 11.5172 8.53418 11.3447C8.5148 11.0418 8.55887 10.8542 8.90332 9.77637C9.18685 8.88928 9.20821 8.80081 9.22656 8.4502C9.24885 8.02439 9.21967 7.89097 9.05957 7.67773C8.79384 7.32398 8.24795 7.15662 7.55859 7.21875ZM9.35059 4.57715C9.14396 4.49609 8.71319 4.47434 8.50586 4.53418C7.72042 4.76128 7.48883 5.58394 8.07129 6.07812C8.30395 6.27552 8.52262 6.35103 8.86523 6.35156C9.09604 6.35189 9.18563 6.33694 9.3457 6.27148C9.616 6.16088 9.78522 6.02103 9.90039 5.81348C10.1545 5.35486 9.90565 4.79506 9.35059 4.57715Z"/>
          </svg>
        </span>
      </div>
    </div>
    <div class="max-w-8xl relative overflow-x-hidden w-full mx-auto flex items-start gap-6 px-3 md:px-5 mt-6">
      <div class="absolute md:hidden left-0 top-32 w-[586px] h-[555px] bg-brand-green rounded-full opacity-20 blur-[100px] z-10"></div>
      <div class="hidden lg:inline-block ">
        <AppFilter />
      </div>
      <AppTabs />
    </div>
  </section>
</template>

<script setup lang="ts">
import AppHero from '~/components/AppHero.vue'
import AppFilter from '~/components/AppFilter.vue'
import AppTabs from '~/components/AppTabs.vue'
</script>



