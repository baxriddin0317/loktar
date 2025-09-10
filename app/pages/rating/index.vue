<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRatingStore } from '~/stores/rating'
import { useDebounce } from '~/composables/useDebounce'
import { useIntersectionObserver } from '@vueuse/core'

const store = useRatingStore()
const { items, loading, hasMore, filters } = storeToRefs(store)
const route = useRoute()
const router = useRouter()

onMounted(() => {
  store.initFromQuery(route.query)
  if (store.items.length === 0) store.applyFilters()
})

watch(
  () => ({ ...filters.value }),
  useDebounce(async () => {
    await store.applyFilters()
    router.replace({ query: store.toQuery() })
  }, 400),
  { deep: true }
)

const sentinel = ref<HTMLDivElement | null>(null)
useIntersectionObserver(sentinel, (entries: readonly IntersectionObserverEntry[]) => {
  const entry = entries[0]
  if (!entry) return
  if (entry.isIntersecting && hasMore.value && !loading.value) {
    store.loadMore()
    router.replace({ query: store.toQuery() })
  }
})
</script>

<template>
  <div class="container mx-auto p-4 space-y-4">
    <div class="flex gap-2 items-end flex-wrap">
      <label class="flex flex-col">
        <span class="text-sm">Период</span>
        <select v-model="filters.period" class="select">
          <option value="week">Неделя</option>
          <option value="month">Месяц</option>
          <option value="avg3m">Среднее 3м</option>
        </select>
      </label>
      <label class="flex flex-col">
        <span class="text-sm">Ниша</span>
        <input v-model="filters.niche" placeholder="код ниши" class="input" />
      </label>
    </div>

    <div class="grid gap-3">
      <div v-for="it in items" :key="it.publicId" class="p-4 rounded border bg-white/60 dark:bg-neutral-900">
        <div v-if="it.isAnonymous">Анонимный таргетолог</div>
        <div v-else>
          <NuxtLink :to="`/rating/t/${it.publicId}`" class="text-primary-600 underline">{{ it.name }}</NuxtLink>
        </div>
      </div>
      <div v-if="loading" class="text-sm text-neutral-500">Загрузка…</div>
      <div v-if="!loading && items.length === 0" class="text-sm">Нет результатов</div>
    </div>

    <div ref="sentinel" class="h-6"></div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";
.input { @apply border rounded px-2 py-1 bg-transparent; }
.select { @apply border rounded px-2 py-1 bg-transparent; }
</style>

