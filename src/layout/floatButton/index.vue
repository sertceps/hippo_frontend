<template>
  <n-dropdown trigger="hover" :options="options">
    <n-button circle color="#fff">
      <IconConfigProvider color="green" size="32">
        <Icon>
          <AutoAwesomeOutlined></AutoAwesomeOutlined>
        </Icon>
      </IconConfigProvider>
    </n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
  import { Icon, IconConfigProvider } from '@vicons/utils';
  import { AutoAwesomeOutlined } from '@vicons/material';

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

<style>
  .n-button {
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
