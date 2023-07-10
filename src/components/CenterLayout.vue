<script setup lang="ts">
import { ElRow } from 'element-plus';
defineSlots<{
  default: (_: {}) => unknown;
}>();
</script>
<template>
  <ElRow :align="'middle'" :justify="'center'">
    <slot></slot>
  </ElRow>
</template>
