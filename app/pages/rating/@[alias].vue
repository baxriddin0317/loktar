<script setup lang="ts">
import { services } from '~/services/api'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const alias = route.params.alias as string
  try {
    const res = await services.resolveAlias(alias)
    const seg = res.type === 'agency' ? 'a' : 't'
    router.replace(`/rating/${seg}/${res.publicId}`)
  } catch {
    router.replace('/404')
  }
})
</script>

<template>
  <div class="p-6 text-sm text-neutral-500">Переадресация…</div>
</template>

