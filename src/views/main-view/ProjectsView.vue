<script setup lang="ts">
import CenterLayout from '@/components/CenterLayout.vue';
import FlexCard from '@/components/FlexCard.vue';
import HeaderText from '@/components/HeaderText.vue';
import { ElImage, ElRow, ElText } from 'element-plus';
defineProps<{
  page: string;
}>();
</script>
<template>
  <FlexCard v-if="page == 'seq-logic'">
    <template #header>
      <ElRow :align="'middle'">
        <HeaderText href="https://gitee.com/yyhhenry/seq-logic"> Seq Logic </HeaderText>
      </ElRow>
    </template>
    <ElText tag="p" size="large">
      在 redstone，Logic Block 之后的第三版本，数字电路仿真软件
    </ElText>
    <ElText tag="p" size="large">
      侧重于教学目的，基于时序控制的，数字电路仿真轻量化桌面应用
    </ElText>
    <ElText tag="p" size="large">
      基于Tauri框架，使用Rust语言、TypeScript语言和Vue3框架，调用系统WebView2完成显示
    </ElText>
    <CenterLayout>
      <ElImage src="./images/projects/seq-logic.png"></ElImage>
    </CenterLayout>
  </FlexCard>
</template>
