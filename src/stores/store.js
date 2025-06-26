import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useStore = defineStore('store', () => {
  const currentLanguage = ref(localStorage.getItem('language') ?? 'RU')
  const { locale } = useI18n()

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
  }
})
