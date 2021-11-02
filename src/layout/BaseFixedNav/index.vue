<template>
  <nav>
    <NavMenu class="nav-menu"></NavMenu>
    <NavToolbar class="nav-toolbar"></NavToolbar>
  </nav>
  <div class="placeholder"></div>
</template>

<script lang="ts" setup>
  import NavMenu from './components/NavMenu.vue';
  import NavToolbar from './components/NavToolbar.vue';
</script>

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
    height: 64px;
    box-sizing: border-box;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 32px;
    background-color: #fff;
    border-bottom: 1px solid rgb(239, 239, 245);
    z-index: 999;
  }

  .nav-toolbar {
    margin-left: auto;
  }
  .placeholder {
    height: 64px;
  }
</style>
