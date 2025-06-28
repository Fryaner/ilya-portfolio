import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useStore = defineStore('store', () => {
  const currentLanguage = ref(localStorage.getItem('language') ?? 'RU')
  const currentTheme = ref(localStorage.getItem('theme') ?? '')

  const { locale } = useI18n()

  function setTheme() {
    if (currentTheme.value) {
      currentTheme.value = ''
      localStorage.setItem('theme', '')
      document.documentElement.setAttribute('data-theme', '')
    } else {
      currentTheme.value = 'dark'
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  function getTheme() {
    if (currentTheme.value) {
      currentTheme.value = 'dark'
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      currentTheme.value = ''
      document.documentElement.setAttribute('data-theme', '')
    }
  }

  function changeLanguage() {
    locale.value = localStorage.getItem('language') === 'RU' ? 'EN' : 'RU'
    currentLanguage.value = locale.value
    localStorage.setItem('language', locale.value)
  }

  function getLanguage() {
    locale.value = currentLanguage.value
    localStorage.setItem('language', locale.value)
  }

  return {
    currentLanguage,
    changeLanguage,
    getLanguage,
    setTheme,
    getTheme,
    currentTheme,
  }
})
