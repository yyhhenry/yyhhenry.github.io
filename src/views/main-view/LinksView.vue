<script setup lang="ts">
import FlexCard from '@/components/FlexCard.vue';
import HeaderText from '@/components/HeaderText.vue';
import { ElText } from 'element-plus';
defineProps<{
  page: string;
}>();
</script>
<template>
  <FlexCard v-if="page == 'bilibili'">
    <template #header>
      <HeaderText :href="'https://space.bilibili.com/40071945'">
        哔哩哔哩up主 奕荷yyhhenry
      </HeaderText>
    </template>
    <ElText tag="p" size="large">
      只是个没多少粉丝的小up主，或者说自娱自乐的账号，不过也有一些有趣的视频，欢迎来看看。
    </ElText>
    <ElText tag="p" size="large">
      近期视频有关ACE Studio虚拟歌姬、RVC AI换声、SD WebUI曲绘制作的原创歌曲《早安晚安》。
    </ElText>
    
    <ElText tag="p" size="large">
      近期较高播放视频为虚拟主播相关。
    </ElText>
  </FlexCard>
  <FlexCard v-else-if="page == 'zhihu'"></FlexCard>
</template>
