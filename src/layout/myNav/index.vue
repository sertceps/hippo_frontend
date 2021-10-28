<template>
  <nav> </nav>
  <div class="placeholder"></div>
</template>

<script lang="ts" setup></script>

<style scoped>
  html,
  body,
  nav,
  div {
    margin: 0;
    padding: 0;
  }
  nav {
    width: 100%;
    height: 63px;
    position: fixed;
    background-color: #fff;
    border-bottom: 1px solid rgb(239, 239, 245);
    z-index: 999;
  }

  .placeholder {
    height: 64px;
  }
</style>
