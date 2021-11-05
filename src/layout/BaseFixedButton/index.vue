<template>
  <NDropdown trigger="hover" :options="options">
    <NButton circle color="#fff" class="float-button" @click="router.push('/articles/create')">
      <IconConfigProvider color="green" size="32">
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
      label: '滨海湾金沙，新加坡',
      key: 'marina bay sands',
      disabled: true,
    },
    {
      label: '布朗酒店，伦敦',
      key: "brown's hotel, london",
    },
    {
      label: '亚特兰蒂斯巴哈马',
      key: 'atlantis nahamas, nassau',
    },
    {
      label: '比佛利山庄酒店',
      key: 'the beverly hills hotel',
    },
  ];
</script>

<script lang="ts">
  export default {
    name: 'BaseFixedButton',
  };
</script>

<style scped>
  .float-button {
    width: 48px;
    height: 48px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 60px;
    right: 60px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px 0px;
  }
</style>
