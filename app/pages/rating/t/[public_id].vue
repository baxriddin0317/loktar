<script setup lang="ts">
import { services } from '~/services/api'
import { useSessionStore } from '~/stores/session'

const route = useRoute()
const session = useSessionStore()

const publicId = computed(() => route.params.public_id as string)
const profile = ref<any | null>(null)
const photoUrl = ref<string | null>(null)
const contacts = ref<any | null>(null)
const contactsError = ref<string | null>(null)

onMounted(async () => {
  profile.value = await services.getTargetologistProfile(publicId.value)
  const img = await services.getTargetologistPhoto(publicId.value)
  photoUrl.value = img.imageUrl
  if (session.authenticated === null) await session.fetchSession()
})

watch(
  () => session.authenticated,
  async (auth) => {
    if (auth === true) {
      try {
        contacts.value = await services.getTargetologistContacts(publicId.value)
        contactsError.value = null
      } catch (e: any) {
        contactsError.value = e?.message || 'Недоступно'
      }
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="container mx-auto p-4 space-y-4">
    <NuxtLink to="/rating" class="underline">Назад к рейтингу</NuxtLink>
    <div class="flex items-center gap-4">
      <img v-if="photoUrl" :src="photoUrl" alt="Фото" width="96" height="96" class="rounded-full" />
      <div>
        <h1 class="text-2xl font-semibold">{{ profile?.name ?? 'Анонимный таргетолог' }}</h1>
        <p v-if="profile?.topNiche" class="text-sm text-neutral-500">Топ-ниша: {{ profile.topNiche }}</p>
      </div>
    </div>

    <section>
      <h2 class="font-medium mb-2">Контакты</h2>
      <div v-if="session.loading" class="text-sm text-neutral-500">Загрузка…</div>
      <div v-else-if="session.authenticated === false" class="p-3 rounded border">
        Зарегистрируйтесь, чтобы видеть контакты
      </div>
      <div v-else-if="contacts">
        <ul class="space-y-1 text-sm">
          <li v-if="contacts.email">Email: {{ contacts.email }}</li>
          <li v-if="contacts.telegram">Telegram: {{ contacts.telegram }}</li>
          <li v-if="contacts.phone">Телефон: {{ contacts.phone }}</li>
          <li v-if="contacts.website">Сайт: {{ contacts.website }}</li>
        </ul>
      </div>
      <div v-else-if="contactsError" class="text-sm text-red-600">{{ contactsError }}</div>
    </section>
  </div>
</template>

