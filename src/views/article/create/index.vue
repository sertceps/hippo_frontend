<template>
  <n-space vertical>
    <n-input v-model:value="title" type="text" placeholder="标题" />
    <n-input v-model:value="content" type="textarea" placeholder="内容" />

    <n-button @click="postArticle" round type="primary"> 发布 </n-button>
  </n-space>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { createArticlesApi } from '@/api/article/article';
  import { useMessage } from 'naive-ui';
  import router from '@/router';

  const message = useMessage();
  const title = ref('');
  const content = ref('');

  const postArticle = async () => {
    try {
      const { id } = await createArticlesApi(title.value, content.value);
      message.success('发布成功');
      // 这里
      router.push('/articles/' + id);
    } catch (err) {
      message.error(err as string);
    }
  };
</script>
<style></style>
