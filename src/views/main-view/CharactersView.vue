<script setup lang="ts">
import CenterLayout from '@/components/CenterLayout.vue';
import FlexCard from '@/components/FlexCard.vue';
import HeaderText from '@/components/HeaderText.vue';
import { ElAvatar, ElImage, ElRow, ElText } from 'element-plus';
defineProps<{
  page: string;
}>();
</script>
<template>
  <FlexCard v-if="page == 'yyhhenry'">
    <template #header>
      <ElRow :align="'middle'">
        <ElAvatar src="./images/avatars/yyhhenry.png"></ElAvatar>
        <HeaderText> 自设名称 奕荷 </HeaderText>
      </ElRow>
    </template>
    <ElText tag="p" size="large"> 行走在互联网的统一名字，和真实姓名不同但同样重要 </ElText>
    <ElText tag="p" size="large"> 图片是一块黄色小饼干，多年未有改动 </ElText>
    <ElText tag="p" size="large">
      作为虚拟形象出现的时候，可以简单理解这个人设为现实身份的虚拟妹妹
    </ElText>
    <ElText tag="p" size="large"> 作为笔名出现的话是指的就是背后那位朴实青年男性喽 </ElText>
  </FlexCard>
  <FlexCard v-else-if="page == 'luoluo'">
    <template #header>
      <ElRow :align="'middle'">
        <ElAvatar src="./images/avatars/luoluo.png" :shape="'square'"></ElAvatar>
        <HeaderText> 吉祥物 落落 </HeaderText>
      </ElRow>
    </template>
    <ElText tag="p" size="large">
      自设已经定型，无法满足一些需要，故此额外创造了一个拟人化吉祥物角色
    </ElText>
    <ElText tag="p" size="large"> 相比之下更加强调虚拟的特质，最初作为对话AI的人设提出 </ElText>
    <ElText tag="p" size="large"> 外形是橙色主题的狐娘，现在已经具有live2d模型 </ElText>
    <ElText tag="p" size="large"> 在各个作品中高强度出现，并作为每个模板项目的默认图标 </ElText>
    <CenterLayout>
      <ElImage src="./images/avatars/luoluo-live2d.png"></ElImage>
    </CenterLayout>
  </FlexCard>
</template>
