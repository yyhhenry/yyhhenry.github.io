<script setup lang="ts">
import { ElMain } from 'element-plus';
defineSlots<{
  default: (_: {}) => unknown;
}>();
</script>
<template>
  <ElMain class="no-padding">
    <slot></slot>
  </ElMain>
</template>
<style scoped>
.no-padding {
  padding: 0px;
}
</style>
