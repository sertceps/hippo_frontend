<template>
  <my-nav></my-nav>
  <suspense>
    <router-view></router-view>
  </suspense>
  <back-top></back-top>
</template>
<script lang="ts" setup>
  import MyNav from './myNav/index.vue';
  import BackTop from './backTop/index.vue';
</script>
