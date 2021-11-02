<template>
  <NMenu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const activeKey = ref(null);
  const menuOptions = [
    {
      label: '首页',
      key: 'home-page',
    },
    {
      label: '喝点酒',
      key: 'beverage',
    },
  ];
</script>
