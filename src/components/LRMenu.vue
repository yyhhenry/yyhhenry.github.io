<script setup lang="ts">
import { ElScrollbar } from 'element-plus';
defineSlots<{
  default: (_: {}) => unknown;
  end: (_: {}) => unknown;
}>();
</script>
<template>
  <ElScrollbar :view-style="{ height: '100%' }">
    <div class="lr-flex">
      <div class="lr-item">
        <slot></slot>
      </div>
      <div class="lr-item" style="margin-left: 40px">
        <slot name="end"></slot>
      </div>
    </div>
  </ElScrollbar>
</template>
<style scoped>
.lr-flex {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  min-width: 100%;
  width: max-content;
}
.lr-item {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
</style>
