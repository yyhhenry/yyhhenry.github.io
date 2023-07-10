<script setup lang="ts">
import { ElLink } from 'element-plus';
import CenterLayout from './CenterLayout.vue';
</script>
<template>
  <div :style="{ color: 'var(--el-text-color)', marginTop: '40px', marginBottom: '10px' }">
    <CenterLayout> 网站名称: 奕荷个人技术分享 </CenterLayout>
    <CenterLayout>
      <ElLink href="https://beian.miit.gov.cn/" type="success" target="_blank">
        浙ICP备2022002061号-1
      </ElLink>
    </CenterLayout>
  </div>
</template>
