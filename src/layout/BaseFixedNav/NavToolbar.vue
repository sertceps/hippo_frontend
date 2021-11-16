<template>
  <NDropdown v-if="userStore.token" trigger="hover" :options="options" :show-arrow="true" @select="handleSelect">
    <NAvatar class="avatar" round size="medium" :src="avatarImageUrl" draggable="false" />
  </NDropdown>
  <NButton
    v-else
    :class="{ 'login-button': true, 'login-button-hidden': globalStore.isLoginButtonShow }"
    @click="handleLogin"
    >登录</NButton
  >
</template>

<script setup lang="ts">
  import avatarImageUrl from '@/assets/images/avatar.jpg';
  import router from '@/router';
  import { useUserStore } from '@/store';
  import { useGlobalStore } from '@/store';
  const { $message: Message } = window;

  const userStore = useUserStore();
  const globalStore = useGlobalStore();

  const options = [
    {
      label: '退出登录',
      key: 'logout',
    },
  ];
  function handleSelect(key: string) {
    if (key === 'logout') {
      userStore.removeToken();
      // router.replace({ name: 'Home' });
      // 页面不会重载？
      router.replace({ path: '/' });
      Message.info('已退出登录');
    }
  }
  function handleLogin() {
    // 为什么直接在 button 中直接 push 不行？
    // 是因为没有唯一根元素吗
    router.push({ name: 'Login' });
  }
</script>

<style scoped>
  .avatar {
    margin-left: auto;
  }
  .login-button {
    margin-left: auto;
  }
  .login-button-hidden {
    display: none;
  }
</style>
