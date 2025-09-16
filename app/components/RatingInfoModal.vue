<template>
  <!-- Mobile: bottom sheet -->
  <div v-if="isOpen" class="fixed inset-0 z-[60] lg:hidden">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal" />
    <div class="absolute bottom-0 left-0 right-0 bg-white dark:bg-brand-element-dark rounded-t-xl max-h-[78vh] overflow-y-auto menu-scroll px-3 py-8">
      <div class="relative mb-4">
        <h3 class="text-2xl w-[90%] font-exo font-medium text-brand-light-primary dark:text-white">Как рассчитывается рейтинг</h3>
        <button @click="closeModal" class="absolute right-1 -top-3 size-9 !bg-brand-main dark:!bg-brand-green rounded-lg flex items-center justify-center cursor-pointer">
          <svg class="fill-white dark:!fill-brand-main" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.11159 0.0247376C0.280831 0.234827 -0.174199 1.17862 0.19474 1.92656C0.243286 2.02501 1.37035 3.20825 2.69932 4.55588L5.11567 7.00619L2.66894 9.48417C0.0443406 12.1423 0.00236233 12.1936 8.915e-06 12.7413C-0.001633 13.1296 0.223693 13.5693 0.536861 13.789C0.742319 13.9331 0.832077 13.9579 1.21114 13.9753C1.52075 13.9895 1.71516 13.9695 1.87716 13.9068C2.05635 13.8375 2.63364 13.2842 4.54062 11.3542L6.97536 8.89007L9.439 11.3747C12.136 14.0946 12.0182 13.9996 12.695 13.9996C13.1062 13.9996 13.3306 13.9063 13.6394 13.6071C14.0353 13.2233 14.1171 12.5285 13.8255 12.0251C13.7502 11.895 12.6156 10.7219 11.3042 9.41817C9.99282 8.11444 8.91989 7.02036 8.91989 6.9868C8.91989 6.9533 10.0129 5.81642 11.3488 4.46036C13.7334 2.03985 13.7789 1.98946 13.8454 1.70025C14.0431 0.840231 13.4199 0.0314931 12.5595 0.0314931C12.0246 0.0314931 11.966 0.080499 9.39911 2.67488L7.00492 5.09467L4.61018 2.67821C3.11549 1.16998 2.13264 0.219986 1.99521 0.150658C1.73294 0.0184248 1.35158 -0.0359524 1.11159 0.0247376Z" />
          </svg>
        </button>
      </div>
      <div class="text-sm leading-[130%] text-brand-light-primary dark:text-white">
        <ol class="list-decimal pl-5 space-y-3">
          <li>В рейтинге участвуют только активные аккаунты LOKTAR.</li>
          <li>Ранжирование по сумме отключенного бюджета за выбранный период.</li>
          <li>Учитываются данные по всем проектам, добавленным в LOKTAR.</li>
          <li>Недельный рейтинг обновляется раз в неделю, месячный — раз в месяц.</li>
          <li>В рейтинге отображаются только первые 100 мест.</li>
          <li>Берём только рекламные кампании, созданные после регистрации в LOKTAR.</li>
          <li>Подписки/лиды не учитываются.</li>
        </ol>
      </div>
    </div>
  </div>

  <!-- Desktop: centered dialog -->
  <div v-if="isOpen" class="fixed inset-0 z-[60] hidden lg:flex items-center justify-center">
    <div class="absolute inset-0 bg-black/50" @click="closeModal" />
    <div class="relative z-10 w-full max-w-[640px] bg-white dark:bg-brand-element-dark rounded-2xl p-6 md:p-8 shadow-xl">
      <button @click="closeModal" class="absolute right-5 top-5 size-9 !bg-brand-main dark:!bg-brand-green rounded-lg flex items-center justify-center cursor-pointer">
        <svg class="fill-white dark:fill-brand-element-dark" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.11159 0.0247376C0.280831 0.234827 -0.174199 1.17862 0.19474 1.92656C0.243286 2.02501 1.37035 3.20825 2.69932 4.55588L5.11567 7.00619L2.66894 9.48417C0.0443406 12.1423 0.00236233 12.1936 8.915e-06 12.7413C-0.001633 13.1296 0.223693 13.5693 0.536861 13.789C0.742319 13.9331 0.832077 13.9579 1.21114 13.9753C1.52075 13.9895 1.71516 13.9695 1.87716 13.9068C2.05635 13.8375 2.63364 13.2842 4.54062 11.3542L6.97536 8.89007L9.439 11.3747C12.136 14.0946 12.0182 13.9996 12.695 13.9996C13.1062 13.9996 13.3306 13.9063 13.6394 13.6071C14.0353 13.2233 14.1171 12.5285 13.8255 12.0251C13.7502 11.895 12.6156 10.7219 11.3042 9.41817C9.99282 8.11444 8.91989 7.02036 8.91989 6.9868C8.91989 6.9533 10.0129 5.81642 11.3488 4.46036C13.7334 2.03985 13.7789 1.98946 13.8454 1.70025C14.0431 0.840231 13.4199 0.0314931 12.5595 0.0314931C12.0246 0.0314931 11.966 0.080499 9.39911 2.67488L7.00492 5.09467L4.61018 2.67821C3.11549 1.16998 2.13264 0.219986 1.99521 0.150658C1.73294 0.0184248 1.35158 -0.0359524 1.11159 0.0247376Z" />
        </svg>
      </button>
      <h3 class="text-xl md:text-2xl font-exo font-medium text-brand-light-primary dark:text-white mb-4">Как рассчитывается рейтинг</h3>
      <div class="text-sm md:text-base leading-[130%] text-brand-light-primary dark:text-white">
        <ol class="list-decimal pl-4 space-y-3">
          <li>В рейтинге участвуют только активные аккаунты LOKTAR.</li>
          <li>Ранжирование по сумме отключенного бюджета за выбранный период.</li>
          <li>Учитываются данные по всем проектам, добавленным в LOKTAR.</li>
          <li>Недельный рейтинг обновляется раз в неделю, месячный — раз в месяц.</li>
          <li>В рейтинге отображаются только первые 100 мест.</li>
          <li>Берём только рекламные кампании, созданные после регистрации в LOKTAR.</li>
          <li>Подписки/лиды не учитываются.</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onBeforeUnmount } from 'vue'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const closeModal = () => emit('close')

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


