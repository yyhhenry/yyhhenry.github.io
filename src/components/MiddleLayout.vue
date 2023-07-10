<script setup lang="ts">
import { ElCol, ElRow } from 'element-plus';
defineSlots<{
  default: (_: {}) => unknown;
}>();
</script>
<template>
  <ElRow :align="'middle'" :style="{ height: '100%' }">
    <ElCol>
      <slot></slot>
    </ElCol>
  </ElRow>
</template>
