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
     <div class="flex flex-col gap-4 mt-6">
       <MarketCard
         v-for="(card, idx) in visibleCards"
         :key="card.publicId"
         :place="idx + 1"
         :item="card"
       />
       <div v-if="isLoading" class="py-4 text-center text-sm text-white/60">Загрузка...</div>
       <div ref="sentinel" class="h-1"></div>
     </div>
    </template>

    <template #agencies>
      <div class="mt-6">
        agencies
      </div>
    </template>
  </UTabs>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import MarketCard from './MarketCard.vue';

const tabs = [
  { label: 'Таргетологи', slot: 'marketers' },
  { label: 'Агентства', slot: 'agencies' },
]

// Полный локальный список (эмулируем данные с сервера)
const allMarketerCards = [
  {
    publicId: '1',
    name: 'Александр Петров',
    isAnonymous: false,
    topNiche: 'Онлайн-образование: Деньги',
    metrics: { score: 95, budget: 2_500_000, leads: 125000 },
  },
  {
    publicId: '2',
    name: 'Мария Сидорова',
    isAnonymous: false,
    topNiche: 'E-commerce: Одежда',
    metrics: { score: 88, budget: 1_800_000, leads: 89000 },
  },
  {
    publicId: '3',
    name: 'Дмитрий Козлов',
    isAnonymous: false,
    topNiche: 'Недвижимость',
    metrics: { score: 82, budget: 1_200_000, leads: 67000 },
  },
  {
    publicId: '4',
    name: 'Анонимный Таргетолог',
    isAnonymous: true,
    topNiche: 'Красота и здоровье',
    metrics: { score: 79, budget: 950_000, leads: 45000 },
  },
  {
    publicId: '5',
    name: 'Елена Волкова',
    isAnonymous: false,
    topNiche: 'Автомобили',
    metrics: { score: 91, budget: 1_600_000, leads: 78000 },
  },
  {
    publicId: '6',
    name: 'Анонимный Таргетолог',
    isAnonymous: true,
    topNiche: 'IT и технологии',
    metrics: { score: 76, budget: 750_000, leads: 32000 },
  },
  {
    publicId: '7',
    name: 'Андрей Морозов',
    isAnonymous: false,
    topNiche: 'Финансы и инвестиции',
    metrics: { score: 93, budget: 2_100_000, leads: 98000 },
  },
  {
    publicId: '8',
    name: 'Анонимный Таргетолог',
    isAnonymous: true,
    topNiche: 'Спорт и фитнес',
    metrics: { score: 85, budget: 1_100_000, leads: 56000 },
  },
  {
    publicId: '9',
    name: 'Ольга Новикова',
    isAnonymous: false,
    topNiche: 'Детские товары',
    metrics: { score: 87, budget: 1_400_000, leads: 71000 },
  },
  {
    publicId: '10',
    name: 'Анонимный Таргетолог',
    isAnonymous: true,
    topNiche: 'Путешествия и туризм',
    metrics: { score: 73, budget: 650_000, leads: 28000 },
  },
  {
    publicId: '11',
    name: 'Сергей Лебедев',
    isAnonymous: false,
    topNiche: 'Медицина и фармацевтика',
    metrics: { score: 89, budget: 1_700_000, leads: 82000 },
  },
  {
    publicId: '12',
    name: 'Анонимный Таргетолог',
    isAnonymous: true,
    topNiche: 'Еда и рестораны',
    metrics: { score: 81, budget: 900_000, leads: 41000 },
  },
  {
    publicId: '13',
    name: 'Анна Соколова',
    isAnonymous: false,
    topNiche: 'Мода и аксессуары',
    metrics: { score: 86, budget: 1_300_000, leads: 63000 },
  },
  {
    publicId: '14',
    name: 'Анонимный Таргетолог',
    isAnonymous: true,
    topNiche: 'Домашние животные',
    metrics: { score: 78, budget: 800_000, leads: 36000 },
  },
  {
    publicId: '15',
    name: 'Владимир Попов',
    isAnonymous: false,
    topNiche: 'Строительство и ремонт',
    metrics: { score: 84, budget: 1_150_000, leads: 52000 },
  },
  {
    publicId: '16',
    name: 'Анонимный Таргетолог',
    isAnonymous: true,
    topNiche: 'Ювелирные изделия',
    metrics: { score: 77, budget: 720_000, leads: 31000 },
  },
  {
    publicId: '17',
    name: 'Татьяна Федорова',
    isAnonymous: false,
    topNiche: 'Книги и образование',
    metrics: { score: 90, budget: 1_550_000, leads: 75000 },
  },
  {
    publicId: '18',
    name: 'Анонимный Таргетолог',
    isAnonymous: true,
    topNiche: 'Музыка и развлечения',
    metrics: { score: 74, budget: 680_000, leads: 29000 },
  },
  {
    publicId: '19',
    name: 'Игорь Смирнов',
    isAnonymous: false,
    topNiche: 'Страхование',
    metrics: { score: 92, budget: 1_950_000, leads: 91000 },
  },
  {
    publicId: '20',
    name: 'Анонимный Таргетолог',
    isAnonymous: true,
    topNiche: 'Свадьбы и праздники',
    metrics: { score: 80, budget: 850_000, leads: 38000 },
  },
  {
    publicId: '21',
    name: 'Наталья Кузнецова',
    isAnonymous: false,
    topNiche: 'Садоводство и растения',
    metrics: { score: 75, budget: 700_000, leads: 26000 },
  },
  {
    publicId: '22',
    name: 'Анонимный Таргетолог',
    isAnonymous: true,
    topNiche: 'Хобби и рукоделие',
    metrics: { score: 72, budget: 600_000, leads: 22000 },
  },
  {
    publicId: '23',
    name: 'Роман Орлов',
    isAnonymous: false,
    topNiche: 'Бизнес и консалтинг',
    metrics: { score: 94, budget: 2_200_000, leads: 105000 },
  },
  {
    publicId: '24',
    name: 'Анонимный Таргетолог',
    isAnonymous: true,
    topNiche: 'Электроника и гаджеты',
    metrics: { score: 83, budget: 1_000_000, leads: 48000 },
  },
  {
    publicId: '25',
    name: 'Юлия Медведева',
    isAnonymous: false,
    topNiche: 'Косметика и парфюмерия',
    metrics: { score: 88, budget: 1_350_000, leads: 69000 },
  },
]

// Параметры пагинации и состояние
const pageSize = 6
const visibleCards = ref(allMarketerCards.slice(0, pageSize))
const isLoading = ref(false)
const hasMore = computed(() => visibleCards.value.length < allMarketerCards.length)

// Эмуляция загрузки следующей страницы
async function loadMore() {
  if (isLoading.value || !hasMore.value) return
  isLoading.value = true
  await new Promise((resolve) => setTimeout(resolve, 700))
  const next = allMarketerCards.slice(visibleCards.value.length, visibleCards.value.length + pageSize)
  visibleCards.value = visibleCards.value.concat(next)
  isLoading.value = false
}

// IntersectionObserver для бесконечной прокрутки
const sentinel = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry && entry.isIntersecting) {
      loadMore()
    }
  }, { root: null, threshold: 1 })

  if (sentinel.value) observer.observe(sentinel.value)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>
