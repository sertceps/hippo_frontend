<template>
  <n-card title="卡片"> 卡片内容 </n-card>
</template>

<script lang="ts" setup>
  import { getArticlesApi } from '@/api/article';
  import { computed } from 'vue-demi';

  try {
    const { count, articles } = await getArticlesApi();
    // console.log(count);
    // console.log(articles);
  } catch (err) {
    console.log(err);
  }
</script>
<style scoped></style>
