<script setup lang="ts">
import FlexCard from '@/components/FlexCard.vue';
import HeaderText from '@/components/HeaderText.vue';
import ICPView from '@/components/ICPView.vue';
import LRMenu from '@/components/LRMenu.vue';
import PageLayout from '@/components/PageLayout.vue';
import SwitchDark from '@/components/SwitchDark.vue';
import websiteName from '@/utils/website-name';
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
</script>

<template>
  <PageLayout>
    <template #header>
      <LRMenu>
        <HeaderText>{{ websiteName }}</HeaderText>
        <template #end>
          <SwitchDark></SwitchDark>
        </template>
      </LRMenu>
    </template>
    <template #aside>
      <ElMenu :default-openeds="['characters', 'projects', 'links']" :default-active="'seq-logic'">
        <ElSubMenu index="projects">
          <template #title> 项目 </template>
          <ElMenuItem index="seq-logic"> Seq Logic </ElMenuItem>
        </ElSubMenu>
        <ElSubMenu index="links">
          <template #title> 相关链接 </template>
          <ElMenuItem index="bilibili"> 哔哩哔哩 </ElMenuItem>
          <ElMenuItem index="zhihu"> 知乎 </ElMenuItem>
        </ElSubMenu>
        <ElSubMenu index="characters">
          <template #title> 人物 </template>
          <ElMenuItem index="yyhhenry"> 奕荷 </ElMenuItem>
          <ElMenuItem index="luoluo"> 落落 </ElMenuItem>
        </ElSubMenu>
      </ElMenu>
    </template>
    <FlexCard> </FlexCard>
    <ICPView></ICPView>
  </PageLayout>
</template>
