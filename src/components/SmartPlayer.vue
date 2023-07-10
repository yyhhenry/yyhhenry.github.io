<script setup lang="ts">
import { parseShareURL } from '@/utils/player-url';
import { computed } from 'vue';
import CenterLayout from './CenterLayout.vue';
import HeaderText from './HeaderText.vue';
const props = defineProps<{
  share: string;
}>();
const parsed = computed(() => parseShareURL(props.share));
</script>
<template>
  <iframe
    class="smart-player"
    scrolling="no"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
    allow="autoplay; encrypted-media"
    :src="parsed?.playerUrl"
    v-if="parsed"
  >
  </iframe>
  <div class="smart-player" v-else>
    <CenterLayout>
      <HeaderText> Invalid share URL </HeaderText>
    </CenterLayout>
  </div>
</template>
<style scoped>
.smart-player {
  width: 100%;
  aspect-ratio: 16/9;
}
</style>
