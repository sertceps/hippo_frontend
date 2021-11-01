<template>
  <div>cao </div>
</template>

<script setup lang="ts">
  import { getArticleApi } from '@/api/article/article';
  import router from '@/router';
  import { useRoute } from 'vue-router';
  const route = useRoute();

  const articleId = route.params.id;
  const res = await getArticleApi(articleId as string);
  console.log(res);
</script>
<style scoped></style>
