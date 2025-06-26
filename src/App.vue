<template>
  <h1>{{ t('navigation.nav_about') }}</h1>
  <button @click="switchLanguage">Сменить</button>
</template>

<script setup lang="js">
// import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
console.log(t)
console.log(locale.value)

const switchLanguage = () => {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
  localStorage.setItem('language', locale.value)
}

// onMounted(() => {
//   locale.value = localStorage.getItem('language')
// })
</script>
