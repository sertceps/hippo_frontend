<template>
  <i></i>
</template>

<script lang="ts" setup>
  import { useMessage } from 'naive-ui';

  /** 将 useMessage 挂载到 window['$message'] 上 */
  window['$message'] = useMessage();
</script>
