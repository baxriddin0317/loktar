<script setup lang="ts">
  import type { RadioGroupItem, RadioGroupValue } from '@nuxt/ui'
  import { ref } from 'vue'

  const items = ref<RadioGroupItem[]>([
    { label: 'За прошлую неделю', value: 'week' },
    { label: 'За месяц',         value: 'month' },
    { label: 'Средмесячный бюджет за 3 месяца', value: '3months' }
  ])

  const value = ref<RadioGroupValue>('week')
  const totalBudjet = ref<[number, number]>([
    50000,
    1300000
  ])

  const MIN = 5000
  const MAX = 1500000

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('ru-RU').format(Math.max(MIN, Math.min(MAX, Math.round(value))))

  const minInput = ref(formatCurrency(totalBudjet.value[0]))
  const maxInput = ref(formatCurrency(totalBudjet.value[1]))

  watch(totalBudjet, ([min, max]: [number, number]) => {
    minInput.value = formatCurrency(min)
    maxInput.value = formatCurrency(max)
  })

  function parseCurrency(input: string): number {
    const digits = input.replace(/[^0-9]/g, '')
    return digits ? Number(digits) : 0
  }

  function applyMin() {
    let v = parseCurrency(minInput.value)
    v = Math.max(MIN, Math.min(v, totalBudjet.value[1]))
    totalBudjet.value[0] = v
    minInput.value = formatCurrency(v)
  }

  function applyMax() {
    let v = parseCurrency(maxInput.value)
    v = Math.min(MAX, Math.max(v, totalBudjet.value[0]))
    totalBudjet.value[1] = v
    maxInput.value = formatCurrency(v)
  }

  // Ниша: данные и выбранное значение
  const niches = ref([
    { label: 'Маркетинг', value: 'marketing' },
    { label: 'E-commerce', value: 'ecommerce' },
    { label: 'Финтех', value: 'fintech' },
    { label: 'Образование', value: 'education' },
    { label: 'Здравоохранение', value: 'healthcare' },
    { label: 'Dev / IT', value: 'it' },
    { label: 'Недвижимость', value: 'realty' }
  ])
  const selectedNiche = ref<string | null>(null)

  // Бюджет в нише: отдельные значения и инпуты
  const nicheBudget = ref<[number, number]>([
    50000,
    1300000
  ])
  const nicheMinInput = ref(formatCurrency(nicheBudget.value[0]))
  const nicheMaxInput = ref(formatCurrency(nicheBudget.value[1]))

  watch(nicheBudget, ([min, max]: [number, number]) => {
    nicheMinInput.value = formatCurrency(min)
    nicheMaxInput.value = formatCurrency(max)
  })

  function applyNicheMin() {
    let v = parseCurrency(nicheMinInput.value)
    v = Math.max(MIN, Math.min(v, nicheBudget.value[1]))
    nicheBudget.value[0] = v
    nicheMinInput.value = formatCurrency(v)
  }

  function applyNicheMax() {
    let v = parseCurrency(nicheMaxInput.value)
    v = Math.min(MAX, Math.max(v, nicheBudget.value[0]))
    nicheBudget.value[1] = v
    nicheMaxInput.value = formatCurrency(v)
  }
</script>

<template>
  <div class="relative overflow-hidden w-full border border-white/30 rounded-3xl bg-white dark:bg-brand-element-dark p-8">
    <span class="hidden dark:block absolute left-4 -top-5 z-0 opacity-80 blur-2xl">
      <svg xmlns="http://www.w3.org/2000/svg" width="396" height="369" viewBox="0 0 396 369" fill="none">
        <g opacity="0.8" filter="url(#filter0_f_1688_7951)">
          <ellipse cx="98.5" cy="106" rx="97.5" ry="63" fill="#11E5B3"/>
        </g>
        <defs>
          <filter id="filter0_f_1688_7951" x="-199" y="-157" width="595" height="526" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1688_7951"/>
          </filter>
        </defs>
      </svg>
    </span>
    <span class="hidden dark:block absolute left-0 top-0 z-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="451" height="848" viewBox="0 0 451 848" fill="none">
        <g filter="url(#filter0_f_1688_7950)">
          <path d="M1029 59.5C1029 240.926 639.712 388 159.5 388C-320.712 388 -710 240.926 -710 59.5C-710 -121.926 -320.712 -269 159.5 -269C639.712 -269 1029 -121.926 1029 59.5Z" fill="url(#paint0_radial_1688_7950)" fill-opacity="0.2"/>
        </g>
        <defs>
          <filter id="filter0_f_1688_7950" x="-1170" y="-729" width="2659" height="1577" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="230" result="effect1_foregroundBlur_1688_7950"/>
          </filter>
          <radialGradient id="paint0_radial_1688_7950" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(159.5 59.5) rotate(-90) scale(589.317 1559.85)">
            <stop stop-color="#6B1693"/>
            <stop offset="1" stop-color="#6B1693" stop-opacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </span>
    <div class="relative z-10 space-y-6">
      <h2 class="text-2xl font-exo font-medium text-brand-light-primary dark:text-white leading-[140%] tracking-[-0.24px]">
        Фильтры
      </h2>
      <div class="flex flex-col gap-3">
        <!-- Бюджет общий  -->
        <div class="bg-brand-gray-2 dark:bg-brand-primary-1 p-4 lg:p-5 rounded-xl">
          <h3 class="text-lg font-semibold font-inter leading-[130%] text-brand-light-primary dark:text-white">
            Бюджет общий
          </h3>
          <div class="mt-6">
            <div class="flex items-center justify-between mb-4">
              <p class="font-inter text-brand-gray-1 text-sm leading-[140%]">{{ totalBudjet[0] }}₽</p>
              <p class="font-inter text-brand-gray-1 text-sm leading-[140%]">{{ totalBudjet[1] }}₽</p>
            </div>
            <USlider class="custom" :min="5000" :max="1500000" v-model="totalBudjet" />
          </div>
          <div class="flex items-center gap-4 mt-6">
            <!-- Min input -->
            <label class="flex items-center gap-3 w-full max-w-[380px] h-12 rounded-lg border border-brand-primary-2 bg-white/5 dark:bg-transparent px-5">
              <span class="text-brand-light-primary dark:text-white font-semibold">₽</span>
              <input
                v-model="minInput"
                @blur="applyMin"
                @keyup.enter="applyMin"
                @focus="$event.target && ($event.target as HTMLInputElement).select()"
                inputmode="numeric"
                class="w-full bg-transparent outline-none text-sm leading-[120%] text-brand-light-primary dark:text-white placeholder:text-brand-light-primary/50 dark:placeholder:text-white/60"
                placeholder="0"
              />
            </label>
  
            <span class="text-brand-light-primary dark:text-white/70 text-2xl">-</span>
  
            <!-- Max input -->
            <label class="flex items-center gap-3 w-full max-w-[380px] h-12 rounded-lg border border-brand-primary-2 bg-white/5 dark:bg-transparent px-5">
              <span class="text-brand-light-primary dark:text-white font-semibold">₽</span>
              <input
                v-model="maxInput"
                @blur="applyMax"
                @keyup.enter="applyMax"
                @focus="$event.target && ($event.target as HTMLInputElement).select()"
                inputmode="numeric"
                class="w-full bg-transparent outline-none text-sm leading-[120%] text-brand-light-primary dark:text-white placeholder:text-brand-light-primary/50 dark:placeholder:text-white/60"
                placeholder="0"
              />
            </label>
          </div>
        </div>
        <!-- Период -->
        <div class="bg-brand-gray-2 dark:bg-brand-primary-1 p-4 lg:p-5 rounded-xl">
          <h3 class="text-lg font-semibold font-inter leading-[130%] text-brand-light-primary dark:text-white">
            Период
          </h3>
          <URadioGroup v-model="value" :items="items" class="[&>fieldset]:space-y-3 mt-6" indicator="hidden" variant="list">
            <template #label="{ item, modelValue }">
              <div class="flex items-center justify-between w-full cursor-pointer transition">
                <span class="font-inter text-brand-light-primary dark:text-white leading-[120%]" :class="{ 'opacity-50': modelValue !== ((item as any).value ?? item) }">{{ (item as any).label ?? item }}</span>
  
                <span v-if="modelValue === ((item as any).value ?? item)" class="flex items-center justify-center size-6 rounded-full bg-[#11E5B3] [&>svg>path]:fill-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5873 0.51781C10.2667 0.568398 10.0641 0.7176 9.25799 1.4973C7.7768 2.92975 6.14132 4.70871 5.03589 6.08958C4.76459 6.42851 4.53149 6.70508 4.51792 6.70414C4.50435 6.70324 3.91591 6.12755 3.21028 5.42494C2.19757 4.41651 1.87589 4.12377 1.68325 4.03535C0.77871 3.62023 -0.235673 4.39859 0.0487508 5.28948C0.121831 5.51834 0.259947 5.66687 2.00335 7.39147C4.07317 9.43896 4.14744 9.49813 4.64972 9.49998C5.22572 9.50209 5.40854 9.37139 6.05856 8.49272C7.44481 6.619 9.24254 4.60318 11.0952 2.84511C11.4728 2.48682 11.8212 2.12291 11.8695 2.03642C12.3115 1.24401 11.5678 0.363217 10.5873 0.51781Z" fill="#001A30"/>
                  </svg>
                </span>
                <span v-if="modelValue !== ((item as any).value ?? item)" class="flex items-center justify-center size-6 rounded-full bg-transparent border border-brand-gray-1"></span>
              </div>
            </template>
          </URadioGroup>
        </div>
        <!-- Ниша -->
        <div class="bg-brand-gray-2 dark:bg-brand-primary-1 p-4 lg:p-5 rounded-xl">
          <h3 class="text-lg font-semibold font-inter leading-[130%] text-brand-light-primary dark:text-white">
            Ниша
          </h3>
          <div class="mt-4 pb-6 border-b border-white/10">
            <USelectMenu
              v-model="selectedNiche"
              :options="niches"
              option-attribute="label"
              value-attribute="value"
              searchable
              searchable-placeholder="Поиск"
              placeholder="Выберите нишу"
              class="w-full h-12 bg-transparent !border-brand-primary-2 outline-none text-sm leading-[120%] text-white placeholder:text-white/60"
            />
          </div>
          <!-- Бюджет в нише -->
          <div class="mt-6">
            <h3 class="text-lg font-semibold font-inter leading-[130%] text-brand-light-primary dark:text-white">
              Бюджет в нише
            </h3>
            <div class="mt-6">
              <div class="flex items-center justify-between mb-4">
                <p class="font-inter text-brand-gray-1 text-sm leading-[140%]">{{ nicheBudget[0] }}₽</p>
                <p class="font-inter text-brand-gray-1 text-sm leading-[140%]">{{ nicheBudget[1] }}₽</p>
              </div>
              <USlider class="custom" :min="5000" :max="1500000" v-model="nicheBudget" />
            </div>
            <div class="flex items-center gap-4 mt-6">
              <!-- Min input -->
              <label class="flex items-center gap-3 w-full max-w-[380px] h-12 rounded-lg border border-brand-primary-2 bg-white/5 dark:bg-transparent px-5">
                <span class="text-brand-light-primary dark:text-white font-semibold">₽</span>
                <input
                  v-model="nicheMinInput"
                  @blur="applyNicheMin"
                  @keyup.enter="applyNicheMin"
                  @focus="$event.target && ($event.target as HTMLInputElement).select()"
                  inputmode="numeric"
                  class="w-full bg-transparent outline-none text-sm leading-[120%] text-brand-light-primary dark:text-white placeholder:text-brand-light-primary/50 dark:placeholder:text-white/60"
                  placeholder="0"
                />
              </label>
    
              <span class="text-brand-light-primary dark:text-white/70 text-2xl">-</span>
    
              <!-- Max input -->
              <label class="flex items-center gap-3 w-full max-w-[380px] h-12 rounded-lg border border-brand-primary-2 bg-white/5 dark:bg-transparent px-5">
                <span class="text-brand-light-primary dark:text-white text-lg font-semibold">₽</span>
                <input
                  v-model="nicheMaxInput"
                  @blur="applyNicheMax"
                  @keyup.enter="applyNicheMax"
                  @focus="$event.target && ($event.target as HTMLInputElement).select()"
                  inputmode="numeric"
                  class="w-full bg-transparent outline-none text-sm leading-[120%] text-brand-light-primary dark:text-white placeholder:text-brand-light-primary/50 dark:placeholder:text-white/60"
                  placeholder="0"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- buttons -->
      <div class="flex w-full justify-between items-center gap-3">
        <button class="w-full flex items-center justify-center text-brand-main dark:text-brand-main-2 border border-brand-main dark:border-brand-main-2 h-14 rounded-lg cursor-pointer">
          Очистить
        </button>
        <button class="w-full flex items-center justify-center bg-brand-main-2 text-brand-primary-3 border border-brand-main-2 h-14 rounded-lg cursor-pointer">
          Очистить (21)
        </button>
      </div>
    </div>
  </div>
</template>

<style>
  .custom{
    span:nth-child(3),
    span:nth-child(2) {
      width: 20px;
      height: 20px;
      --tw-ring-color: #11E5B3;
    }

    /* Light mode (default) */
    span:nth-child(1){
      height: 2px !important;
      background: rgba(0, 26, 48, 0.2) !important; /* brand-primary-1 at 20% */
    }
    span:nth-child(1) span{
      background: #11E5B3 !important; /* active filled track */
    }

    /* Dark mode overrides */
    :is(html.dark, .dark &) span:nth-child(1){
      background: rgba(255, 255, 255, 0.6) !important;
    }
    :is(html.dark, .dark &) span:nth-child(1) span{
      background: #11E5B3 !important;
    }
  }
</style>