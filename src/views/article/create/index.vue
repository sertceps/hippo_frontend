<template>
  <main>
    <NSpace vertical class="article">
      <NInput v-model:value="title" type="text" placeholder="标题" />
      <NInput
        v-model:value="content"
        type="textarea"
        placeholder="内容"
        height="20%"
        :autosize="{
          minRows: 15,
          maxRows: 20,
        }"
      />
      <!-- v-model:value -->
      <!-- https://juejin.cn/post/6889988292482662413 -->
      <!-- https://v3.cn.vuejs.org/guide/component-custom-events.html#v-model-%E5%8F%82%E6%95%B0 -->
      <div class="button-container">
        <NButton round type="primary" @click="postArticle"> 发布 </NButton>
      </div>
    </NSpace>
  </main>
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
      router.push(`/articles/show/${id}`);
    } catch (err) {
      message.error(err as string);
    }
  };
</script>
<script lang="ts">
  export default {
    name: 'ArticleCreate',
  };
</script>

<style scoped>
  main {
    display: flex;
    height: calc(100vh - 64px -5%);
    justify-content: center;
    min-width: 370px;
    padding: 0 5%;
    padding-top: 5%;
  }
  .article {
    flex: 1;
  }
  .button-container {
    display: flex;
    justify-content: end;
  }
</style>
