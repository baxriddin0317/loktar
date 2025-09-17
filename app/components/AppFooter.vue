<template>
  <footer class="relative dark:bg-brand-element-dark mt-auto rounded-t-2xl py-9 overflow-hidden">
    <span class="dark:hidden absolute -top-0 left-1/2 -translate-x-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="226" viewBox="0 0 1920 226" fill="none">
        <g filter="url(#filter0_f_1688_24868)">
          <path d="M1459.97 -174.504C1459.97 90.8492 1371.85 -174.504 962.409 -174.504C552.971 -174.504 235.044 58.8182 235.044 -206.535C235.044 -471.889 566.959 -687 976.396 -687C1385.83 -687 1459.97 -439.858 1459.97 -174.504Z" fill="#CF52FE"/>
        </g>
        <defs>
          <filter id="filter0_f_1688_24868" x="-418.252" y="-1340.3" width="2531.52" height="1937.02" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="326.648" result="effect1_foregroundBlur_1688_24868"/>
          </filter>
        </defs>
      </svg>
    </span>
    <span class="dark:hidden absolute left-1/2 -translate-x-20 -top-1/2 bg-[#6841FE] w-[1505px] h-[973px] rounded-[1505px] blur-[326.6479797363281px]"></span>
    <span class="dark:hidden absolute right-1/2 -translate-x-20 -top-1/2 bg-[#11E5B3] w-[2302.868px] h-[1143.268px] rounded-[2302.868px] blur-[326.6479797363281px]"></span>
    <span class="absolute -bottom-10 left-1/2 -translate-x-1/2 z-0 bg-transparent">
      <svg xmlns="http://www.w3.org/2000/svg" width="595" height="226" viewBox="0 0 595 226" fill="none">
        <g opacity="0.8" filter="url(#filter0_f_1688_8292)">
          <ellipse cx="297.5" cy="194" rx="97.5" ry="63" fill="#11E5B3"/>
        </g>
        <defs>
          <filter id="filter0_f_1688_8292" x="0" y="-69" width="595" height="526" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1688_8292"/>
          </filter>
        </defs>
      </svg>
    </span>
    <span class="absolute -top-0 -left-5 bg-transparent">
      <svg xmlns="http://www.w3.org/2000/svg" width="375" height="226" viewBox="0 0 375 226" fill="none">
        <g filter="url(#filter0_f_1713_30057)">
          <path d="M221 15.7455C221 72.5681 202.222 15.7455 114.982 15.7455C27.7418 15.7455 -40 65.709 -40 8.88642C-40 -47.9362 30.7222 -94 117.962 -94C205.203 -94 221 -41.0771 221 15.7455Z" fill="#CF52FE"/>
        </g>
        <defs>
          <filter id="filter0_f_1713_30057" x="-240" y="-294" width="661" height="535" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1713_30057"/>
          </filter>
        </defs>
      </svg>
    </span>
    <div class="relative z-10 max-w-4xl mx-auto text-center bg-transparent px-3">
      <h3 class="font-exo font-medium text-white text-[24px] md:text-[32px] tracking-[-0.32px] leading-[140%]">
        Зарегистрируйтесь
      </h3>
      <p class="font-exo leading-[140%] text-white dark:opacity-70 mt-2">
        чтобы получить доступ к контактам таргетологов и агентств
      </p>
      <button @click="onRegisterClick" class="w-52 mx-auto mt-7 flex items-center justify-center bg-brand-main dark:bg-brand-main-2 text-white dark:text-brand-primary-3 border border-brand-main-2 h-14 rounded-lg cursor-pointer text-sm">
        Зарегистрироваться
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { inject } from 'vue'
const openRegister = inject<() => void>('openRegister')
const onRegisterClick = () => {
  if (openRegister) openRegister()
}
</script>