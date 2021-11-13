<template>
  <NMenu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>

<script setup lang="ts">
  import { ref, h, resolveComponent } from 'vue';

  const activeKey = ref('home-page');
  const menuOptions = [
    {
      label: () => h(resolveComponent('router-link'), { to: '/' }, () => '首页'),
      key: 'home-page',
    },
    {
      label: () => h(resolveComponent('router-link'), { to: '/articles/create' }, () => '写文章'),
      key: 'beverage',
    },
  ];
</script>
