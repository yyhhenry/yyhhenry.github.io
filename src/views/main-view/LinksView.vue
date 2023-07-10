<script setup lang="ts">
import CenterLayout from '@/components/CenterLayout.vue';
import FlexCard from '@/components/FlexCard.vue';
import HeaderText from '@/components/HeaderText.vue';
import SmartPlayer from '@/components/SmartPlayer.vue';
import { ElAvatar, ElImage, ElRow, ElTabPane, ElTabs, ElText } from 'element-plus';
import { ref } from 'vue';
defineProps<{
  page: string;
}>();
const bilibiliVideos = [
  'https://www.bilibili.com/video/BV1SV4y1h7wu/',
  'https://www.bilibili.com/video/BV1fS4y1D7ub/',
];
const selectedBilibiliVideo = ref('0');
</script>
<template>
  <FlexCard v-if="page == 'bilibili'">
    <template #header>
      <ElRow :align="'middle'">
        <ElAvatar src="./images/avatars/yyhhenry.png"></ElAvatar>
        <HeaderText href="https://space.bilibili.com/40071945">
          哔哩哔哩up主 奕荷yyhhenry
        </HeaderText>
      </ElRow>
    </template>
    <ElText tag="p" size="large">
      只是个没多少粉丝的小up主，或者说自娱自乐的账号，不过也有一些有趣的视频，欢迎来看看。
    </ElText>
    <ElText tag="p" size="large">
      近期视频有关ACE Studio虚拟歌姬、RVC AI换声、SD WebUI曲绘制作的原创歌曲《早安晚安》。
    </ElText>
    <ElText tag="p" size="large"> 近期较高播放视频为虚拟主播相关。 </ElText>
    <ElTabs v-model="selectedBilibiliVideo">
      <ElTabPane label="早安晚安" name="0"> </ElTabPane>
      <ElTabPane label="创意工坊" name="1"> </ElTabPane>
    </ElTabs>
    <SmartPlayer :share="bilibiliVideos[+selectedBilibiliVideo]"> </SmartPlayer>
  </FlexCard>
  <FlexCard v-else-if="page == 'zhihu'">
    <template #header>
      <ElRow :align="'middle'">
        <ElAvatar src="./images/avatars/yyhhenry.png" :shape="'square'"></ElAvatar>
        <HeaderText href="https://www.zhihu.com/people/yyhhenry">
          知乎答主 奕荷yyhhenry
        </HeaderText>
      </ElRow>
    </template>
    <ElText tag="p" size="large"> 并不是很活跃，近期回答与ICPC比赛、计算机科学与技术相关。 </ElText>
    <ElText tag="p" size="large"> 低强度更新专栏，最近专栏与计算机环境配置教程有关。 </ElText>
    <CenterLayout>
      <HeaderText href="https://zhuanlan.zhihu.com/p/626171271">
        <ElImage src="./images/zhihu/环境配置教程.png"></ElImage>
      </HeaderText>
    </CenterLayout>
  </FlexCard>
</template>
