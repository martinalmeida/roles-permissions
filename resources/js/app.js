import './bootstrap';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import app from '@/modules/app.vue';
import router from '@/router/index.js'

createApp(app).use( createPinia() ).use(router).mount("#app");
