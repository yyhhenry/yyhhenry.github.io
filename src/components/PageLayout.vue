<script setup lang="ts">
import { ElContainer, ElAside, ElHeader } from 'element-plus';
import PlainMain from './page-layout/PlainMain.vue';
import { useWindowSize } from '@vueuse/core';
import { computed, ref, watchEffect } from 'vue';
const slots = defineSlots<{
  default: (_: {}) => unknown;
  header: (_: {}) => unknown;
  aside?: (_: {}) => unknown;
}>();
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 700);
const showAside = ref(true);
watchEffect(() => {
  if (!isMobile.value) {
    showAside.value = true;
  }
});
const onTouchMain = () => {
  if (isMobile.value) {
    showAside.value = false;
  }
};
const onTouchHeader = () => {
  if (isMobile.value) {
    showAside.value = true;
  }
};
</script>
<template>
  <ElContainer class="full-viewport">
    <ElHeader @click="onTouchHeader()" @touch="onTouchHeader()" class="root-header">
      <slot name="header"></slot>
    </ElHeader>
    <PlainMain>
      <ElContainer class="full-height">
        <Transition name="slide-fade">
          <ElAside
            :width="'250px'"
            class="aside"
            v-if="slots.aside && showAside"
            :style="{ marginRight: isMobile ? `-250px` : undefined }"
          >
            <slot name="aside"></slot>
          </ElAside>
        </Transition>
        <PlainMain @click="onTouchMain()" @touch="onTouchMain()">
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
  z-index: 20;
  background-color: var(--el-bg-color-page);
  border-right: 1px solid var(--el-border-color);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-250px);
  opacity: 0;
}
</style>
