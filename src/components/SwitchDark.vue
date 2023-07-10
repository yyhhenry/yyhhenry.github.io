<script setup lang="ts">
import { ElIcon, ElRadioButton, ElRadioGroup } from 'element-plus';
import { useColorMode } from '@vueuse/core';
import { Moon, Sunny, Platform } from '@element-plus/icons-vue';
const { store: colorMode } = useColorMode();
</script>
<template>
  <ElRadioGroup v-model="colorMode" :size="'small'">
    <ElRadioButton label="dark" title="Dark">
      <ElIcon><Moon></Moon></ElIcon>
    </ElRadioButton>
    <ElRadioButton label="auto" title="System">
      <ElIcon><Platform></Platform></ElIcon>
    </ElRadioButton>
    <ElRadioButton label="light" title="Light">
      <ElIcon><Sunny></Sunny></ElIcon>
    </ElRadioButton>
  </ElRadioGroup>
</template>
<style scoped>
.switch-dark {
  --el-switch-on-color: var(--el-bg-color);
  --el-switch-off-color: var(--el-color-info);
}
</style>
