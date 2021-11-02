<template>
  <BaseFixedNav></BaseFixedNav>
  <suspense>
    <router-view></router-view>
  </suspense>
  <BaseFixedButton></BaseFixedButton>
</template>
<script lang="ts" setup>
  import BaseFixedNav from './BaseFixedNav/index.vue';
  import BaseFixedButton from './BaseFixedButton/index.vue';
</script>
