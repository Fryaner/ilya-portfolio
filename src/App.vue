<template>
  <headerComponent />
  <coverMain />
  <titleComponent>
    <template v-slot:title>ff</template>
  </titleComponent>
</template>

<script setup lang="js">
import headerComponent from './components/header-main.vue'
import coverMain from './components/cover-main.vue'
import titleComponent from './components/ui/title-component.vue'
</script>
