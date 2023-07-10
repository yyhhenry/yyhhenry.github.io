<script setup lang="ts">
import MainView from '@/views/MainView.vue';
import { useTitle } from '@vueuse/core';
import websiteName from './utils/website-name';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
useTitle(websiteName);
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <MainView></MainView>
  </ElConfigProvider>
</template>
