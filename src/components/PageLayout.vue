<script setup lang="ts">
import { ElContainer, ElAside, ElHeader } from 'element-plus';
import PlainMain from './page-layout/PlainMain.vue';
const slots = defineSlots<{
  default: (_: {}) => unknown;
  header: (_: {}) => unknown;
  aside?: (_: {}) => unknown;
}>();
</script>
<template>
  <ElContainer class="full-viewport">
    <ElHeader class="root-header">
      <slot name="header"></slot>
    </ElHeader>
    <PlainMain>
      <ElContainer class="full-height">
        <ElAside class="aside" v-if="slots.aside">
          <slot name="aside"></slot>
        </ElAside>
        <PlainMain>
          <slot></slot>
        </PlainMain>
      </ElContainer>
    </PlainMain>
  </ElContainer>
</template>
<style scoped>
.full-viewport {
  height: 100vh;
}
.full-height {
  height: 100%;
}
.root-header {
  background-color: var(--el-bg-color-page);
}
.aside {
  border-right: 1px solid var(--el-border-color);
}
</style>
