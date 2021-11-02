<template>
  <main>
    <masonry-wall :items="articles" :column-width="300" :padding="16">
      <template #default="{ item, _ }">
        <n-card :title="item.title" hoverable>
          <template #cover>
            <img class="cover" src="src/assets/images/article-background.jpeg" draggable="false" />
          </template>
          <section>
            <n-avatar class="avatar" round size="large" src="src/assets/images/avatar.jpg" draggable="false" />
          </section>
          {{ item.abstract }}
          <template #footer>j</template>
        </n-card>
      </template>
    </masonry-wall>
  </main>
</template>

<script lang="ts" setup>
  // import { useMessage } from 'naive-ui';
  import { getArticlesApi } from '@/api/article/article';

  // const message = useMessage();
  const { articles } = await getArticlesApi();
</script>

<style scoped>
  main {
    padding: 30px;
  }
  .n-card {
    cursor: pointer;
  }
  .cover,
  .avatar {
    user-select: none;
    -webkit-user-drag: none;
  }
</style>
