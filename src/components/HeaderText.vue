<script setup lang="ts">
import { ElLink } from 'element-plus';
defineProps<{
  fontSize?: string;
  enableSelect?: boolean;
  href?: string;
}>();
</script>
<template>
  <ElLink
    :underline="false"
    class="header-text"
    :style="{
      fontSize: fontSize ?? '1.5rem',
      userSelect: enableSelect ? 'text' : 'none',
    }"
    :href="href"
    :title="href"
  >
    <slot></slot>
  </ElLink>
</template>
<style scoped>
.header-text {
  margin: 0 0.5rem;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
