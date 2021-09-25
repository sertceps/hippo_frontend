<template>
  <my-nav></my-nav>
  <suspense>
    <router-view></router-view>
  </suspense>
  <float-button></float-button>
</template>
<script lang="ts" setup>
  import MyNav from './myNav/index.vue';
  import FloatButton from './floatButton/index.vue';
</script>
