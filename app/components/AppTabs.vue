<template>
  <UTabs
    :items="tabs"
    class="w-full bg-transparent"
    :ui="{
      list: 'bg-transparent dark:!bg-transparent border-0 gap-2 !p-0',
      indicator: 'bg-brand-main-2',
      trigger:
        'dark:text-white [&>span]:dark:!bg-transparent bg-white dark:bg-transparent data-[state=active]:bg-brand-green data-[state=active]:dark:bg-[#023038] text-brand-main data-[state=active]:text-white dark:text-white/30 data-[state=active]:dark:text-brand-green border border-white/30 data-[state=active]:!border-brand-green text-brand-main cursor-pointer h-14',
      content: 'bg-transparent',
    }"
  >
    <template #marketers>
     salom
    </template>

    <template #agencies>
      daf
    </template>
  </UTabs>
</template>

<script setup lang="ts">
const tabs = [
  { label: 'Таргетологи', slot: 'marketers' },
  { label: 'Агентства', slot: 'agencies' },
]
</script>
