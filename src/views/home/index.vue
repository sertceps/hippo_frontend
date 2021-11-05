<template>
  <main>
    <MasonryWall :items="articles" :column-width="300" :gap="16">
      <template #default="{ item, _ }">
        <router-link :to="'/articles/show/' + item._id">
          <NCard :title="item.title" hoverable>
            <template #cover>
              <img class="cover" :src="articleBackgroundImageUrl" draggable="false" />
            </template>
            <section>
              <NAvatar class="avatar" round size="large" :src="avatarImageUrl" draggable="false" />
            </section>
            {{ item.abstract }}
            <template #footer> footer</template>
          </NCard>
        </router-link>
      </template>
    </MasonryWall>
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

<script lang="ts">
  export default {
    name: 'BaseFixedButton',
  };
</script>

<style scoped>
  a {
    text-decoration: none;
  }
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
