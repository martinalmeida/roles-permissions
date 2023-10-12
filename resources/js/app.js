import './bootstrap';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import app from '@/modules/app.vue';
import router from '@/router/index.js'

// Globals Components
import Input from "@/modules/shared/components/Input.vue";
import Button from "@/modules/shared/components/Button.vue";
import Modal from "@/modules/shared/components/Modal.vue";
import Sidebar from "@/modules/shared/components/layout/sidebar.vue";
import Head from "@/modules/shared/components/layout/Head.vue";
import Search from "@/modules/shared/components/layout/Search.vue";
import Content from "@/modules/shared/components/layout/Content.vue";

createApp(app)
    .use(createPinia())
    .use(router)
    .component("Input", Input)
    .component("Button", Button)
    .component("Modal", Modal)
    .component("Sidebar", Sidebar)
    .component("Head", Head)
    .component("Search", Search)
    .component("Content", Content)
    .mount("#app");
