<template>
  <AppProvider>
    <router-view></router-view>
  </AppProvider>
</template>

<script lang="ts" setup>
  import AppProvider from '@/components/AppProvider/index.vue';
</script>

<style>
  html,
  body,
  #app {
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
