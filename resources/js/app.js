import './bootstrap';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import app from '@/modules/app.vue';
import router from '@/router/index.js'

// Globals Components
import Spinner from "@s/components/Spinner.vue";
import Input from "@s/components/Input.vue";
import Button from "@s/components/Button.vue";
import Modal from "@s/components/Modal.vue";
import Sidebar from "@s/components/layout/sidebar.vue";
import Head from "@s/components/layout/Head.vue";
import Search from "@s/components/layout/Search.vue";
import Content from "@s/components/layout/Content.vue";

createApp(app)
    .use(createPinia())
    .use(router)
    .component("Spinner", Spinner)
    .component("Input", Input)
    .component("Button", Button)
    .component("Modal", Modal)
    .component("Sidebar", Sidebar)
    .component("Head", Head)
    .component("Search", Search)
    .component("Content", Content)
    .mount("#app");
