<template>
  <div class="w-full">
    <UTabs :items="tabs" class="w-full bg-transparent">
      <template #item="{ item }">
        <div class="mt-4">
          <h3 class="text-xl font-semibold">{{ item.label }}</h3>
          <div class="mt-3">
            <UCard v-if="item.slot === 'all'">
              <p>Hamma yozuvlar uchun kontent.</p>
            </UCard>
            <UCard v-else-if="item.slot === 'top'">
              <p>Ommabop yozuvlar.</p>
            </UCard>
            <UCard v-else>
              <p class="text-sm text-gray-500">Mazmun tez orada qo'shiladi.</p>
            </UCard>
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script setup lang="ts">
const tabs = [
  { label: 'Таргетологи', slot: 'all'},
  { label: 'Агентства', slot: 'top'},
]
</script>


