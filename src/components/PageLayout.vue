<script setup lang="ts">
import { ElContainer, ElAside, ElHeader } from 'element-plus';
import PlainMain from './page-layout/PlainMain.vue';
import { useAnimate, useWindowSize } from '@vueuse/core';
import { computed, ref, watchEffect } from 'vue';
const slots = defineSlots<{
  default: (_: {}) => unknown;
  header: (_: {}) => unknown;
  aside?: (_: {}) => unknown;
}>();
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 700);
const asideWidth = 250;
const asideElement = ref<HTMLElement>();
const showStyle = {
  transform: 'translateX(0)',
  opacity: 1,
};
const hideStyle = {
  transform: `translateX(-${asideWidth}px)`,
  opacity: 0,
};
const asideAnime = useAnimate(asideElement, [showStyle, hideStyle], {
  duration: 400,
  easing: 'ease-out',
  immediate: false,
});
const asideHided = ref(false);
const hideAside = () => {
  asideAnime.cancel();
  asideAnime.playbackRate.value = 1;
  asideAnime.play();
  asideHided.value = true;
};
const showAside = () => {
  asideAnime.cancel();
  asideAnime.playbackRate.value = -1;
  asideAnime.play();
  asideHided.value = false;
};
watchEffect(() => {
  if (!isMobile.value && asideHided.value) {
    showAside();
  }
});
const onTouchMain = () => {
  if (isMobile.value && !asideHided.value) {
    hideAside();
  }
};
const onTouchHeader = () => {
  if (isMobile.value && asideHided.value) {
    showAside();
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
        <ElAside
          :style="asideHided ? hideStyle : showStyle"
          ref="asideElement"
          :width="`${asideWidth}px`"
          class="aside"
          v-if="slots.aside"
        >
          <slot name="aside"></slot>
        </ElAside>
        <PlainMain
          @click="onTouchMain()"
          @touch="onTouchMain()"
          :style="{ marginLeft: isMobile ? `-${asideWidth}px` : undefined }"
        >
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
</style>
