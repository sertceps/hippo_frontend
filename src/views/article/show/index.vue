<template>
  <div>{{ res.content }} </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { getArticleApi } from '@/api/article/article';

  const route = useRoute();

  const articleId = route.params.id;
  const res = await getArticleApi(articleId as string);
</script>
<script lang="ts">
  export default {
    name: 'ArticleShow',
  };
</script>
<style scoped></style>
