<script setup lang="ts">
import HeaderText from '@/components/HeaderText.vue';
import ICPView from '@/components/ICPView.vue';
import LRMenu from '@/components/LRMenu.vue';
import PageLayout from '@/components/PageLayout.vue';
import SwitchDark from '@/components/SwitchDark.vue';
import websiteName from '@/utils/website-name';
import ProjectsView from './main-view/ProjectsView.vue';
import LinksView from './main-view/LinksView.vue';
import CharactersView from './main-view/CharactersView.vue';
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
import { ref } from 'vue';
const tabs = ['characters', 'projects', 'links'] as const;
type Tab = (typeof tabs)[number];
const isTab = (tab: string): tab is Tab => (tabs as readonly string[]).includes(tab);
const tab = ref<Tab>('projects');
const page = ref('seq-logic');
const handleSelect = (index: string, indexPath: string[]) => {
  const selectedTab = indexPath[0];
  if (!isTab(selectedTab)) return;
  tab.value = selectedTab;
  page.value = index;
};
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
      <ElMenu :default-openeds="tabs.slice()" :default-active="page" @select="handleSelect">
        <ElSubMenu index="projects">
          <template #title> 项目 </template>
          <ElMenuItem index="seq-logic"> Seq Logic </ElMenuItem>
          <ElMenuItem index="nrm-use"> nrm-use </ElMenuItem>
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
    <ProjectsView :page="page" v-if="tab == 'projects'"></ProjectsView>
    <LinksView :page="page" v-else-if="tab == 'links'"></LinksView>
    <CharactersView :page="page" v-else-if="tab == 'characters'"></CharactersView>
    <ICPView></ICPView>
  </PageLayout>
</template>
