<template>
  <n-space vertical>
    <n-input v-model:value="title" type="text" placeholder="标题" />
    <n-input v-model:value="content" type="textarea" placeholder="内容" />

    <n-button @click="postArticle" round type="primary"> 发布 </n-button>
  </n-space>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { createArticlesApi } from '@/api/article';
  const title = ref('');
  const content = ref('');

  const postArticle = async () => {
    const { id } = await createArticlesApi(title.value, content.value);
    console.log(id);
  };
</script>
<style></style>
