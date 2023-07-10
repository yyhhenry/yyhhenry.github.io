import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { useColorMode } from '@vueuse/core';

useColorMode();

createApp(App).mount('#app');
