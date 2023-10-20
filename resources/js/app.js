import './bootstrap';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import app from '@/modules/app.vue';
import router from '@/router/index.js'

// Globals Components
import Spinner from "@s/components/Spinner.vue";
import Input from "@s/components/Input.vue";
import Button from "@s/components/Button.vue";
import Alert from "@s/components/Alert.vue";
import Layout from "@s/components/Layout.vue";
import Modal from "@s/components/Modal.vue";

createApp(app)
    .use(createPinia())
    .use(router)
    .component("Spinner", Spinner)
    .component("Input", Input)
    .component("Button", Button)
    .component("Alert", Alert)
    .component("layout", Layout)
    .component("Modal", Modal)
    .mount("#app");
