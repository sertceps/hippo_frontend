<template>
  <NDropdown trigger="hover" :options="options" :show-arrow="true" @select="handleSelect">
    <NAvatar class="avatar" round size="medium" :src="avatarImageUrl" draggable="false" />
  </NDropdown>
</template>

<script setup lang="ts">
  import avatarImageUrl from '@/assets/images/avatar.jpg';
  import router from '@/router';
  import { useUserStore } from '@/store';
  const { $message: Message } = window;

  const userStore = useUserStore();
  const options = [
    {
      label: '退出登录',
      key: 'logout',
    },
  ];
  function handleSelect(key: string) {
    if (key === 'logout') {
      userStore.removeToken();
      router.replace('/');
      Message.info('已退出登录');
    }
  }
</script>

<style scoped>
  .avatar {
    margin-left: auto;
  }
</style>
