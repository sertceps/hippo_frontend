<template>
  <main>
    <masonry-wall :items="articles" :column-width="300" :padding="16">
      <template #default="{ item, index }">
        <n-card :title="item.title" hoverable>
          <template #cover>
            <img src="src/assets/images/article-background.jpeg" />
          </template>
          <section>
            <n-avatar round size="large" src="src/assets/images/avatar.jpg" />
          </section>
          {{ item.abstract }}
          <template #footer>j</template>
        </n-card>
      </template>
    </masonry-wall>
  </main>
</template>

<script lang="ts" setup>
  import { getArticlesApi } from '@/api/article';
  import { computed } from 'vue-demi';
  import { useMessage } from 'naive-ui';

  const message = useMessage();
  const { count, articles } = await getArticlesApi();
</script>

<style scoped>
  main {
    padding: 30px;
  }
</style>
