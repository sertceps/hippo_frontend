<template>
  <div>Article </div>
</template>

<script setup lang="ts">
  import { getArticlesApi } from '@/api/article';

  const getArticle = async () => {
    const articles = await getArticlesApi(1, 5);
    console.log(articles);
  };

  getArticle();
</script>
<style scoped></style>
