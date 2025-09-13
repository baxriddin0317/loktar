<template>
  <div
    class="relative w-full rounded-2xl overflow-hidden border border-transparent dark:border-brand-primary-1 text-brand-main"
    :class="bgClass"
  >
    <div class="flex flex-col xlg:flex-row flex-wrap xlg:items-center gap-3 xlg:gap-6 p-4 xlg:px-5 xlg:py-5 leading-[120%]">
      <div class="flex items-stretch gap-3 xlg:gap-4">
        <img
          v-if="avatarUrl"
          :src="avatarUrl"
          alt="avatar"
          class="h-12 w-12 md:h-16 md:w-16 rounded-lg object-cover"
        />
        <div v-else class="h-12 w-12 md:h-16 md:w-16 rounded-lg bg-[#F0F8FE] dark:bg-[#01213C] grid place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="25" viewBox="0 0 38 25" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0079 0.186082C10.2326 0.450774 9.53788 1.08004 9.18896 1.83351C9.03686 2.16195 8.47008 4.26128 7.92948 6.49885C7.38888 8.73642 6.90874 10.5667 6.86277 10.5664C6.81664 10.5661 6.54782 10.0023 6.26529 9.31328C5.68168 7.89009 5.90593 7.95772 3.81101 8.5725C1.56383 9.23207 0 10.3023 0 11.1811C0 11.9756 1.6645 13.0475 3.98772 13.7492C13.6281 16.6609 34.2412 15.5801 37.5314 11.9902C38.1166 11.3517 38.1417 11.0751 37.6737 10.4156C37.1114 9.62321 35.5635 8.91558 32.6459 8.11732C32.3723 8.04237 32.2632 8.20241 31.7935 9.36598C31.4974 10.1 31.2286 10.6754 31.1965 10.6445C31.1642 10.6136 30.6534 8.62192 30.0614 6.21833C28.8952 1.48491 28.7053 1.03614 27.62 0.454358C26.5633 -0.112351 26.0969 -0.106678 23.4285 0.50437C21.2548 1.00211 20.7276 1.06959 19.0122 1.06973C17.2997 1.06988 16.7767 1.0033 14.6847 0.518702C12.0476 -0.092346 11.8701 -0.10832 11.0079 0.186082ZM8.43657 16.6675C8.12131 16.9695 8.10355 17.1285 8.10355 19.6572C8.10355 21.9803 8.13908 22.3692 8.37626 22.6454C8.71692 23.0421 11.2331 23.9145 13.402 24.3881C17.1384 25.204 20.886 25.204 24.6223 24.3881C26.7913 23.9145 29.3074 23.0421 29.6481 22.6454C29.8853 22.3692 29.9208 21.9803 29.9208 19.6572C29.9208 17.1285 29.903 16.9695 29.5878 16.6675C29.2223 16.3174 29.1743 16.3177 24.934 16.7014C23.9483 16.7905 21.2835 16.8635 19.0122 16.8635C16.7408 16.8635 14.076 16.7905 13.0903 16.7014C8.85001 16.3177 8.80201 16.3174 8.43657 16.6675ZM12.2858 18.4759C11.3969 18.7331 10.2773 19.4282 10.1851 19.7801C10.0629 20.2465 10.3853 20.5712 11.4813 21.0852C13.1271 21.8573 15.0551 21.7174 16.4898 20.7218C17.6154 19.9406 17.274 19.3219 15.3079 18.581C14.6107 18.3182 13.0218 18.263 12.2858 18.4759ZM22.6744 18.5795C21.4263 19.0839 20.8822 19.4978 20.8822 19.9427C20.8822 20.2833 21.0279 20.441 21.7004 20.8281C23.3046 21.7516 24.9402 21.837 26.5513 21.0813C28.2635 20.2783 28.32 19.7135 26.7679 18.9209C25.9373 18.4966 25.6046 18.415 24.5444 18.3748C23.6348 18.3403 23.1291 18.3957 22.6744 18.5795Z" class="fill-brand-green dark:!fill-[#023764]"/>
          </svg>
        </div>
  
        <div class="flex-1 w-[280px]">
          <p class="font-inter text-sm md:text-lg" :class="textClass">{{ displayName }}</p>
          <p class="text-2xl md:text-3xl font-medium" :class="textClass">{{ formattedAmount }}</p>
        </div>
      </div>

      <div class="flex xlg:flex-wrap flex-row-reverse xlg:flex-row justify-end xlg:justify-start items-center gap-3 xlg:gap-6 border-t border-white/10 xlg:border-t-0 pt-3 xlg:pt-0">
        <div class="">
          <p class="dark:opacity-35 opacity-80 text-sm" :class="textClass">Кол-во лидов:</p>
          <p :class="textClass">{{ formattedLeads }}</p>
        </div>
        <div class="hidden xlg:block w-px h-12 bg-white/10"></div>
        <div class="flex-1 flex items-center gap-2.5 d:gap-3 max-w-[55%] w-full xlg:w-auto bg-brand-black xlg:bg-transparent rounded-lg py-2.5 pl-3 xlg:p-0">
          <div class="relative h-12 w-12 grid place-items-center">
            <svg viewBox="0 0 48 48" class="h-8 w-8 md:h-12 md:w-12 -rotate-90">
              <circle cx="24" cy="24" r="20" stroke="currentColor" class="text-white/20 dark:!stroke-[#033648]" stroke-width="4" fill="none" />
              <circle
                cx="24"
                cy="24"
                r="20"
                :class="scoreStroke"
                stroke-width="5"
                fill="none"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="dashOffset"
                stroke-linecap="round"
              />
            </svg>
            <span class="absolute text-xs xlg:text-base text-brand-green font-bold" :class="scoreStroke">{{ scoreValue }}</span>
          </div>
          <div>
            <p class="dark:opacity-35 !text-white xlg:text-brand-main text-xs opacity-80 xlg:text-sm" :class="textClass">Топ-ниша:</p>
            <p class="text-xs !text-white xlg:text-brand-main" :class="textClass">{{ nicheName }}</p>
          </div>
        </div>
      </div>

    </div>

    <div class="absolute right-3 top-3">
      <span
        class="px-3 py-1 rounded-full text-xs font-medium"
        :class="badgeClass"
      >
        {{ place }} место
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ListItem } from '~/services/dto'

const props = withDefaults(defineProps<{
  place: number
  item: ListItem
  amountKey?: string
  leadsKey?: string
  scoreKey?: string
  avatarUrl?: string
}>(), {
  amountKey: 'budget',
  leadsKey: 'leads',
  scoreKey: 'score',
})

const displayName = computed(() => props.item.name ?? 'Анонимный Таргетолог')
const nicheName = computed(() => props.item.topNiche ?? 'Не определена')
const amountRaw = computed(() => props.item.metrics[props.amountKey!] ?? null)
const leadsRaw = computed(() => props.item.metrics[props.leadsKey!] ?? null)
const scoreRaw = computed(() => props.item.metrics[props.scoreKey!] ?? null)

const formattedAmount = computed(() => {
  const value = typeof amountRaw.value === 'number' ? amountRaw.value : null
  if (value == null) return '—'
  // Format like "1,5 млн ₽" when large
  const abs = Math.abs(value)
  const ru = new Intl.NumberFormat('ru-RU')
  if (abs >= 1_000_000) return `${(value / 1_000_000).toFixed(1).replace('.', ',')} млн ₽`
  if (abs >= 1_000) return `${ru.format(Math.round(value / 1000) * 1000)} ₽`
  return `${ru.format(value)} ₽`
})

const formattedLeads = computed(() => {
  const value = typeof leadsRaw.value === 'number' ? leadsRaw.value : null
  if (value == null) return '—'
  return new Intl.NumberFormat('ru-RU').format(value)
})

const scoreValue = computed(() => {
  const value = typeof scoreRaw.value === 'number' ? scoreRaw.value : null
  if (value == null) return 0
  return Math.round(value)
})

const textClass = computed(() => {
  if (props.place === 1) {
    return '!text-white'
  }
  if (props.place === 2 || props.place === 3) {
    return '!text-white'
  }
  return 'text-brand-main dark:text-white'
})

const bgClass = computed(() => {
  if (props.place === 1) {
    return 'bg-[#6841FE] dark:!bg-transparent dark:!bg-[linear-gradient(333deg,rgba(205,81,252,0.00)_-57.04%,rgba(204,81,250,0.50)_73.75%)] dark:!border-[#CF52FE] dark:!text-white'
  }
  if (props.place === 2 || props.place === 3) {
    return 'bg-[#32C3A1] dark:!bg-transparent dark:!bg-[linear-gradient(300deg,rgba(17,229,179,0.00)_-28.72%,rgba(17,229,179,0.50)_68.34%)] dark:!border-[#11E5B3] dark:!text-white'
  }
  return 'bg-white dark:bg-brand-primary-1'
})

const badgeClass = computed(() => {
  if (props.place === 1) return 'dark:!bg-[#CF52FE] bg-white text-[#272251]'
  if (props.place === 2 || props.place === 3) return 'dark:!bg-[#11E5B3] bg-white text-[#080915]'
  return 'dark:!bg-[#01213C] bg-[#F0F8FE] text-[#1F2122] dark:text-white/70'
})

const scoreStroke = computed(() => {
  if (props.place === 1) return 'stroke-white dark:stroke-[#CF52FE] text-white'
  if (props.place === 2 || props.place === 3) return 'stroke-white dark:stroke-brand-green text-white dark:text-brand-green'
  return 'stroke-brand-green'
})

const circumference = 2 * Math.PI * 20
const dashOffset = computed(() => {
  const pct = Math.max(0, Math.min(100, scoreValue.value)) / 100
  return circumference * (1 - pct)
})
</script>

<style scoped>
.font-exo {
  font-family: var(--font-exo);
}
</style>