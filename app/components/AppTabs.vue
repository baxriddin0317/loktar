<template>
  <div class="w-full">
    <!-- Tab triggers -->
    <div class="flex gap-2 mb-4">
      <button
        v-for="tab in tabs"
        :key="tab.slot"
        @click="activeTab = tab.slot"
        :class="[
          'w-full rounded-lg border transition-all duration-200 cursor-pointer h-14',
          activeTab === tab.slot
            ? 'bg-brand-green dark:bg-[#023038] text-white dark:text-brand-green !border-brand-green'
            : 'bg-white dark:bg-transparent text-brand-main dark:text-white/30 border-white/30 hover:border-brand-green/50'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Mobile uchun qo'shimcha komponent - trigger va content orasida -->
    <div class="lg:hidden mb-4">
      <!-- filter -->
      <div class="flex gap-2 items-center justify-between">
        <div class="flex flex-col gap-1.5">
          <h4 class="leading-[120%] text-brand-main dark:text-white">
            За прошлую неделю
          </h4>
          <p class="text-xs text-brand-gray-1 dark:">Бюджет неограничен</p>
        </div>
        <button @click="handleOpenMobileFilter" class="bg-brand-main dark:bg-brand-green flex items-center justify-center size-10 rounded-lg cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path class="fill-white dark:fill-brand-main" fill-rule="evenodd" clip-rule="evenodd" d="M4.33416 0.103776C3.37517 0.335235 2.48537 1.05367 2.09445 1.91209L1.9056 2.32681H1.37094C0.430302 2.32681 0 2.63679 0 3.31438C0 3.61876 0.0478861 3.72751 0.286139 3.96398C0.561926 4.23771 0.596178 4.24815 1.23292 4.25216L1.89356 4.25633L2.1229 4.73746C2.42965 5.38105 3.03029 5.97018 3.70297 6.28717C4.20094 6.52189 4.32549 6.54502 5.09158 6.54502C5.85768 6.54502 5.98223 6.52189 6.4802 6.28717C7.15288 5.97018 7.75351 5.38105 8.06027 4.73746L8.2896 4.25633L12.3587 4.25216L16.4277 4.24798L16.7139 3.96398C16.9521 3.72751 17 3.61876 17 3.31438C17 3.11149 16.9389 2.86207 16.8627 2.75423C16.5687 2.33751 16.453 2.32681 12.2267 2.32648L8.2896 2.32623L8.0091 1.78789C7.54859 0.903816 6.73368 0.291215 5.73969 0.0818914C5.19384 -0.0330444 4.88077 -0.0281161 4.33416 0.103776ZM10.9827 9.53912C10.0445 9.84768 9.33536 10.4478 8.9468 11.2619L8.7104 11.7572L4.64134 11.7614L0.572277 11.7656L0.286139 12.0496C0.0478861 12.2861 0 12.3948 0 12.6992C0 12.9021 0.0610991 13.1515 0.137262 13.2593C0.431312 13.6761 0.54703 13.6867 4.7733 13.6871L8.7104 13.6873L8.9909 14.2257C9.64767 15.4864 11.0715 16.1998 12.4336 15.9507C13.509 15.754 14.343 15.1527 14.8259 14.2257L15.1064 13.6873L15.6351 13.6871C16.5699 13.6865 17 13.3752 17 12.6992C17 12.3948 16.9521 12.2861 16.7139 12.0496C16.4381 11.7759 16.4038 11.7654 15.7671 11.7614L15.1064 11.7572L14.87 11.2619C14.5607 10.6137 13.9775 10.0451 13.2987 9.7299C12.849 9.52099 12.6268 9.47213 12.0361 9.45233C11.6011 9.4378 11.187 9.47188 10.9827 9.53912Z"/>
          </svg>
        </button>
      </div>

      <!-- === -->
      <div class="relative flex items-end justify-start lg:hidden max-w-vw mx-auto w-full h-12 mt-6 overflow-x-hidden overflow-y-hidden">
        <span class="absolute -right-4 -top-2 dark:!bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" width="106" height="29" viewBox="0 0 106 29" fill="none">
            <path d="M953 1.00002L242.936 1.00002L215.094 28L1 28" stroke="url(#paint0_radial_1713_17208)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <radialGradient id="paint0_radial_1713_17208" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(564.85 14.4702) rotate(-90) scale(388.46 400.571)">
                <stop offset="0.00094151" stop-color="#9A6CF4"/>
                <stop offset="1" stop-color="#CF52FE"/>
              </radialGradient>
            </defs>
          </svg>
        </span>
        <span class="absolute dark:!bg-transparent -left-4 -top-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="375" height="72" viewBox="0 0 375 72" fill="none">
            <path d="M498.223 37.5L256.174 37.5L212.029 11.6207L-16.5 11.6207L-75.589 71L-296.713 71L-366.371 1.00006L-669 1.00006" stroke="url(#paint0_radial_1713_17207)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <radialGradient id="paint0_radial_1713_17207" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48.9339 36.1183) rotate(-90) scale(297.931 296.474)">
                <stop offset="0.00094151" stop-color="#CF52FE" stop-opacity="0"/>
                <stop offset="1" stop-color="#9A3AE0"/>
              </radialGradient>
            </defs>
          </svg>
        </span>
        <div class="relative z-10 max-w-8xl flex items-center justify-start gap-2">
          <p class="text-brand-main dark:text-brand-gray-1 text-xs leading-[120%]">Как рассчитывается рейтинг</p>
          <span class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path d="M8 0.5C12.4183 0.5 16 4.08172 16 8.5C16 12.9183 12.4183 16.5 8 16.5C3.58172 16.5 0 12.9183 0 8.5C0 4.08172 3.58172 0.5 8 0.5ZM7.55859 7.21875C7.42551 7.23073 7.20166 7.27131 7.06152 7.30859C6.82186 7.37238 6.14542 7.58642 6.12012 7.60645C6.09299 7.63086 5.98187 8.05897 6.00293 8.05859C6.01701 8.05795 6.12821 8.03004 6.25098 7.99609C6.51679 7.9227 6.91445 7.91444 7.08887 7.97852C7.2567 8.04036 7.32124 8.16624 7.32129 8.43457C7.32129 8.70984 7.27462 8.89565 6.94629 9.92969C6.6476 10.8704 6.60616 11.0457 6.60059 11.3926C6.59612 11.6742 6.64464 11.8318 6.79688 12.0283C7.01915 12.315 7.39655 12.4706 7.92578 12.4951C8.38021 12.5161 8.66245 12.4689 9.25488 12.2705L9.75195 12.1035L9.81152 11.9199C9.90686 11.6246 9.90825 11.6275 9.68066 11.6953C9.25634 11.8216 8.79823 11.7967 8.62988 11.6387C8.56414 11.5769 8.54521 11.5172 8.53418 11.3447C8.5148 11.0418 8.55887 10.8542 8.90332 9.77637C9.18685 8.88928 9.20821 8.80081 9.22656 8.4502C9.24885 8.02439 9.21967 7.89097 9.05957 7.67773C8.79384 7.32398 8.24795 7.15662 7.55859 7.21875ZM9.35059 4.57715C9.14396 4.49609 8.71319 4.47434 8.50586 4.53418C7.72042 4.76128 7.48883 5.58394 8.07129 6.07812C8.30395 6.27552 8.52262 6.35103 8.86523 6.35156C9.09604 6.35189 9.18563 6.33694 9.3457 6.27148C9.616 6.16088 9.78522 6.02103 9.90039 5.81348C10.1545 5.35486 9.90565 4.79506 9.35059 4.57715Z" fill="#92909A"/>
            </svg>
          </span>
        </div>
      </div>
    </div>

    <!-- Tab content -->
    <div class="bg-transparent">
      <div v-if="activeTab === 'marketers'" class="flex flex-col gap-4 mt-6">
        <MarketCard
          v-for="(card, idx) in visibleCards"
          :key="card.publicId"
          :place="idx + 1"
          :item="card"
        />
        <div v-if="isLoading" class="py-4 text-center text-sm text-white/60">Загрузка...</div>
        <div ref="sentinel" class="h-1"></div>
      </div>

      <div v-if="activeTab === 'agencies'" class="mt-6">
        agencies
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, inject } from 'vue';
import MarketCard from './MarketCard.vue';

const tabs = [
  { label: 'Таргетологи', slot: 'marketers' },
  { label: 'Агентства', slot: 'agencies' },
]

// Active tab state
const activeTab = ref('marketers')

// Inject openMobileFilter function from layout
const openMobileFilter = inject('openMobileFilter', () => {})

// Open mobile filter menu
const handleOpenMobileFilter = () => {
  openMobileFilter()
}

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
