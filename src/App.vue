<template>
  <headerComponent />
  <coverMain />
  <titleComponent>
    <template v-slot:title>О нас</template>
  </titleComponent>
  <titleComponent>
    <template v-slot:title>Проекты</template>
    <template v-slot:subtitle>Множество</template>
  </titleComponent>
</template>

<script setup lang="js">
import headerComponent from './components/header-main.vue'
import coverMain from './components/cover-main.vue'
import titleComponent from './components/ui/title-UI.vue'
</script>
