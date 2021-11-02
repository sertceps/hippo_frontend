<template>
  <main>
    <masonry-wall :items="articles" :column-width="300" :padding="16">
      <template #default="{ item, _ }">
        <router-link :to="'/articles/' + item._id">
          <n-card :title="item.title" hoverable>
            <template #cover>
              <img class="cover" :src="articleBackgroundImageUrl" draggable="false" />
            </template>
            <section>
              <n-avatar class="avatar" round size="large" :src="avatarImageUrl" draggable="false" />
            </section>
            {{ item.abstract }}
            <template #footer> footer</template>
          </n-card>
        </router-link>
      </template>
    </masonry-wall>
  </main>
</template>

<script lang="ts" setup>
  // import { useMessage } from 'naive-ui';
  import { getArticlesApi } from '@/api/article/article';
  import articleBackgroundImageUrl from '@/assets/images/article-background.jpeg';
  import avatarImageUrl from '@/assets/images/avatar.jpg';

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
