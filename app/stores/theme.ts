import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  // State
  const isDark = ref(false)

  // Actions
  function toggleTheme() {
    isDark.value = !isDark.value
    saveToStorage()
    applyTheme()
  }

  function setTheme(theme: 'light' | 'dark') {
    isDark.value = theme === 'dark'
    saveToStorage()
    applyTheme()
  }

  function initTheme() {
    // Load from localStorage
    if (process.client) {
      const saved = localStorage.getItem('theme')
      if (saved) {
        isDark.value = saved === 'dark'
      } else {
        // Check system preference
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
    }
    applyTheme()
  }

  function saveToStorage() {
    if (process.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  function applyTheme() {
    if (process.client) {
      const html = document.documentElement
      if (isDark.value) {
        html.classList.add('dark')
      } else {
        html.classList.remove('dark')
      }
    }
  }

  // Computed
  const themeIcon = computed(() => {
    return isDark.value ? 'sun' : 'moon'
  })

  return {
    isDark: readonly(isDark),
    themeIcon,
    toggleTheme,
    setTheme,
    initTheme
  }
})
