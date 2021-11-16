<template>
  <NDropdown trigger="hover" :options="options" :show-arrow="true">
    <NButton circle color="#fff" class="float-button" @click="router.push({ name: 'ArticleCreate' })">
      <IconConfigProvider color="green" size="26">
        <Icon>
          <EditOutlined></EditOutlined>
        </Icon>
      </IconConfigProvider>
    </NButton>
  </NDropdown>
</template>

<script setup lang="ts">
  import { Icon, IconConfigProvider } from '@vicons/utils';
  import { EditOutlined } from '@vicons/antd';
  import router from '@/router';

  const options = [
    {
      label: '回到顶部',
      key: 'back to top',
    },
  ];
</script>

<script lang="ts">
  export default {
    name: 'BaseFixedButton',
  };
</script>

<style scoped>
  .float-button {
    width: 42px;
    height: 42px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 40px;
    right: 60px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px 0px;
  }
</style>
