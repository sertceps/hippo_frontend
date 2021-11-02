<template>
  <n-space vertical>
    <n-input v-model="title" type="text" placeholder="标题" />
    <n-input v-model="content" type="textarea" placeholder="内容" />

    <n-button round type="primary" @click="postArticle"> 发布 </n-button>
  </n-space>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useMessage } from 'naive-ui';
  import { createArticlesApi } from '@/api/article/article';
  import router from '@/router';

  const message = useMessage();
  const title = ref('');
  const content = ref('');

  const postArticle = async () => {
    try {
      const { id } = await createArticlesApi(title.value, content.value);
      message.success('发布成功');
      // 这里
      router.push(`/articles/${id}`);
    } catch (err) {
      message.error(err as string);
    }
  };
</script>
<style></style>
