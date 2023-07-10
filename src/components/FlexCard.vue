<script setup lang="ts">
import { ElCard } from 'element-plus';
import CenterLayout from './CenterLayout.vue';
const slots = defineSlots<{
  default: (_: {}) => unknown;
  header?: (_: {}) => unknown;
}>();
</script>
<template>
  <CenterLayout stream>
    <ElCard class="flex-card">
      <slot></slot>
      <template #header v-if="slots.header">
        <slot name="header"></slot>
      </template>
    </ElCard>
  </CenterLayout>
</template>
<style scoped>
.flex-card {
  margin: 20px;
  width: min(100%, max(800px, 60%));
}
</style>
