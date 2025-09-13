<template>
  <div 
    v-if="isOpen" 
    class="fixed inset-0 top-0 left-0 z-50 max-h-[100vh] lg:hidden"
  >
    <!-- Backdrop -->
    <div class="relative top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm"></div>
    <div class="absolute bottom-0 left-0 right-0 bg-white dark:bg-brand-element-dark rounded-t-3xl max-h-[78vh] 
    overflow-y-auto menu-scroll ">
      <button 
        @click="closeModal"
        class="absolute right-3 top-0 z-50 flex dark:bg-brand-green items-center justify-center size-10 rounded-lg 
        cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.11159 0.0247376C0.280831 0.234827 -0.174199 1.17862 0.19474 1.92656C0.243286 2.02501 1.37035 3.20825 2.69932 4.55588L5.11567 7.00619L2.66894 9.48417C0.0443406 12.1423 0.00236233 12.1936 8.915e-06 12.7413C-0.001633 13.1296 0.223693 13.5693 0.536861 13.789C0.742319 13.9331 0.832077 13.9579 1.21114 13.9753C1.52075 13.9895 1.71516 13.9695 1.87716 13.9068C2.05635 13.8375 2.63364 13.2842 4.54062 11.3542L6.97536 8.89007L9.439 11.3747C12.136 14.0946 12.0182 13.9996 12.695 13.9996C13.1062 13.9996 13.3306 13.9063 13.6394 13.6071C14.0353 13.2233 14.1171 12.5285 13.8255 12.0251C13.7502 11.895 12.6156 10.7219 11.3042 9.41817C9.99282 8.11444 8.91989 7.02036 8.91989 6.9868C8.91989 6.9533 10.0129 5.81642 11.3488 4.46036C13.7334 2.03985 13.7789 1.98946 13.8454 1.70025C14.0431 0.840231 13.4199 0.0314931 12.5595 0.0314931C12.0246 0.0314931 11.966 0.080499 9.39911 2.67488L7.00492 5.09467L4.61018 2.67821C3.11549 1.16998 2.13264 0.219986 1.99521 0.150658C1.73294 0.0184248 1.35158 -0.0359524 1.11159 0.0247376Z" fill="#00203A"/>
        </svg>
      </button>
      <AppFilter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onBeforeUnmount } from 'vue'
import AppFilter from './AppFilter.vue'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Close modal function
const closeModal = () => {
  emit('close')
}

// Handle keyboard events
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

// Watch for modal state changes to handle body scroll
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeydown)
  } else {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', handleKeydown)
  }
})

// Clean up on unmount
onBeforeUnmount(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleKeydown)
})
</script>
