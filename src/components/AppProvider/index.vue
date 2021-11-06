<template>
  <NMessageProvider>
    <MessageContent />
    <slot></slot>
  </NMessageProvider>
</template>

<script setup lang="ts">
  import { NMessageProvider } from 'naive-ui';
  import MessageContent from './MessageContent.vue';
</script>

<script lang="ts">
  export default {
    name: 'AppProvider',
  };
</script>
