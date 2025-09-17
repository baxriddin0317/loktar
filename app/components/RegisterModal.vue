<template>
  <!-- Mobile: bottom sheet -->
  <div v-if="isOpen" class="fixed inset-0 z-[60] md:hidden">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal" />
    <div class="absolute bottom-0 left-0 right-0 bg-white dark:bg-brand-element-dark rounded-t-xl max-h-[78vh] overflow-y-auto menu-scroll px-3 sm:px-5 py-8">
      <div class="relative mb-4">
        <h3 class="text-[28px] leading-[120%] font-exo font-medium text-brand-light-primary dark:text-white">Регистрация <br> / Вход</h3>
        <button @click="closeModal" class="absolute right-1 -top-3 size-9 !bg-brand-main dark:!bg-brand-green rounded-lg flex items-center justify-center cursor-pointer">
          <svg class="fill-white dark:!fill-brand-main" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.11159 0.0247376C0.280831 0.234827 -0.174199 1.17862 0.19474 1.92656C0.243286 2.02501 1.37035 3.20825 2.69932 4.55588L5.11567 7.00619L2.66894 9.48417C0.0443406 12.1423 0.00236233 12.1936 8.915e-06 12.7413C-0.001633 13.1296 0.223693 13.5693 0.536861 13.789C0.742319 13.9331 0.832077 13.9579 1.21114 13.9753C1.52075 13.9895 1.71516 13.9695 1.87716 13.9068C2.05635 13.8375 2.63364 13.2842 4.54062 11.3542L6.97536 8.89007L9.439 11.3747C12.136 14.0946 12.0182 13.9996 12.695 13.9996C13.1062 13.9996 13.3306 13.9063 13.6394 13.6071C14.0353 13.2233 14.1171 12.5285 13.8255 12.0251C13.7502 11.895 12.6156 10.7219 11.3042 9.41817C9.99282 8.11444 8.91989 7.02036 8.91989 6.9868C8.91989 6.9533 10.0129 5.81642 11.3488 4.46036C13.7334 2.03985 13.7789 1.98946 13.8454 1.70025C14.0431 0.840231 13.4199 0.0314931 12.5595 0.0314931C12.0246 0.0314931 11.966 0.080499 9.39911 2.67488L7.00492 5.09467L4.61018 2.67821C3.11549 1.16998 2.13264 0.219986 1.99521 0.150658C1.73294 0.0184248 1.35158 -0.0359524 1.11159 0.0247376Z" />
          </svg>
        </button>
      </div>

      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <button @click="setTab('customer')" :class="tabClass('customer')" class="px-4 h-10 rounded-lg text-sm">Заказчик</button>
          <button @click="setTab('agency')" :class="tabClass('agency')" class="px-4 h-10 rounded-lg text-sm">Таргетолог/Агентство</button>
        </div>
        <template v-if="activeTab === 'customer'">
          <input type="email" placeholder="Ваш e-mail" class="w-full h-12 rounded-lg px-3 border border-brand-stroke dark:border-white/10 bg-white dark:bg-brand-element-dark text-brand-light-primary dark:text-white placeholder:text-brand-light-primary/60 dark:placeholder:text-white/60" />
          <div class="flex items-start gap-2 text-xs text-brand-light-primary dark:text-white">
            <input id="agree-m" type="checkbox" class="mt-0.5">
            <label for="agree-m">Я согласен с условиями политики конфиденциальности</label>
          </div>
          <button class="w-full h-12 rounded-lg bg-brand-main dark:bg-brand-green text-white">Зарегистрироваться</button>
        </template>
        <template v-else>
          <button class="w-full h-12 rounded-lg bg-brand-main dark:bg-brand-green text-white">Вход по VK ID</button>
        </template>
      </div>
    </div>
  </div>

  <!-- Desktop: centered dialog -->
  <div v-if="isOpen" class="fixed inset-0 z-[60] hidden md:flex items-center justify-center">
    <div class="absolute inset-0 bg-black/50" @click="closeModal" />
    <div class="relative overflow-hidden z-10 w-full max-w-[560px] bg-white dark:bg-brand-element-dark rounded-2xl p-6 md:p-8 shadow-xl">
      <div class="absolute z-10 -bottom-[20%] -left-[10%] bg-brand-green blur-[100px] rounded-[789px] w-[709px] h-32"></div>
      <button @click="closeModal" class="absolute right-5 top-5 size-9 !bg-brand-main dark:!bg-brand-green rounded-lg flex items-center justify-center cursor-pointer">
        <svg class="fill-white dark:fill-brand-element-dark" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.11159 0.0247376C0.280831 0.234827 -0.174199 1.17862 0.19474 1.92656C0.243286 2.02501 1.37035 3.20825 2.69932 4.55588L5.11567 7.00619L2.66894 9.48417C0.0443406 12.1423 0.00236233 12.1936 8.915e-06 12.7413C-0.001633 13.1296 0.223693 13.5693 0.536861 13.789C0.742319 13.9331 0.832077 13.9579 1.21114 13.9753C1.52075 13.9895 1.71516 13.9695 1.87716 13.9068C2.05635 13.8375 2.63364 13.2842 4.54062 11.3542L6.97536 8.89007L9.439 11.3747C12.136 14.0946 12.0182 13.9996 12.695 13.9996C13.1062 13.9996 13.3306 13.9063 13.6394 13.6071C14.0353 13.2233 14.1171 12.5285 13.8255 12.0251C13.7502 11.895 12.6156 10.7219 11.3042 9.41817C9.99282 8.11444 8.91989 7.02036 8.91989 6.9868C8.91989 6.9533 10.0129 5.81642 11.3488 4.46036C13.7334 2.03985 13.7789 1.98946 13.8454 1.70025C14.0431 0.840231 13.4199 0.0314931 12.5595 0.0314931C12.0246 0.0314931 11.966 0.080499 9.39911 2.67488L7.00492 5.09467L4.61018 2.67821C3.11549 1.16998 2.13264 0.219986 1.99521 0.150658C1.73294 0.0184248 1.35158 -0.0359524 1.11159 0.0247376Z" />
        </svg>
      </button>

      <h3 class="text-[32px] leading-[130%] font-exo font-medium text-brand-light-primary dark:text-white mb-8">Регистрация / Вход</h3>

      <div class="">
        <p class="mb-3">Выберите роль</p>
        <div class="flex items-center gap-2 mb-6">
          <button @click="setTab('customer')" :class="tabClass('customer')" class="px-4 h-10 rounded-lg text-sm">Заказчик</button>
          <button @click="setTab('agency')" :class="tabClass('agency')" class="px-4 h-10 rounded-lg text-sm">Таргетолог/Агентство</button>
        </div>
        <template v-if="activeTab === 'customer'">
          <input type="email" placeholder="Ваш e-mail" class="w-full h-12 rounded-lg px-4 border border-brand-gray-3 dark:border-[#3B556C]  bg-white text-brand-light-primary dark:text-brand-main placeholder:text-brand-light-primary/60 dark:placeholder:text-[#92909A] mb-3 outline-none" />
          <div class="flex items-start gap-2 text-xs text-brand-light-primary dark:text-white">
            <input id="agree-d" type="checkbox" class="mt-0.5">
            <label for="agree-d">Я согласен с условиями политики конфиденциальности</label>
          </div>
          <button class="w-full h-12 rounded-lg bg-brand-green-2 dark:bg-[linear-gradient(94deg,#45E4BF_0%,#08CFA0_100%)] cursor-pointer text-white dark:text-brand-primary-3 mt-8">Зарегистрироваться</button>
        </template>
        <template v-else>
          <button class="w-full h-12 rounded-lg bg-brand-main dark:bg-brand-green text-white">Вход по VK ID</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onBeforeUnmount, ref } from 'vue'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const closeModal = () => emit('close')

type Tab = 'customer' | 'agency'
const activeTab = ref<Tab>('customer')
const setTab = (tab: Tab) => {
  activeTab.value = tab
}

const tabClass = (tab: Tab) => {
  const isActive = activeTab.value === tab
  return isActive
    ? 'bg-[#6841FE] dark:bg-transparent text-white dark:text-brand-green border border-transparent dark:border-brand-green'
    : 'bg-[#F5F6F8] dark:bg-brand-primary-1 border border-[#F5F6F8] dark:border-brand-primary-1 text-brand-light-primary dark:text-white/80 '
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) closeModal()
}

watch(() => props.isOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeydown)
  } else {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', onKeydown)
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})
</script>


