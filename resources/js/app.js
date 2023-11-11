import './bootstrap';

import { createApp, defineAsyncComponent } from 'vue';
import { createPinia } from 'pinia';

import app from '@/modules/app.vue';
import router from '@/router/index.js'

// Globals Simples Components
import Spinner from "@s/components/Spinner.vue";
import Input from "@s/components/Input.vue";
import Button from "@s/components/Button.vue";
import Alert from "@s/components/Alert.vue";
import Modal from "@s/components/Modal.vue";
import FormHead from "@s/components/FormHead.vue";

// Globals Async Components
const Layout = defineAsyncComponent(
    () => import("@s/components/Layout.vue")
);
const DataTable = defineAsyncComponent(
    () => import("@s/components/DataTable/Table.vue")
);
const Drapzone = defineAsyncComponent(
    () => import("@s/components/Drapzone.vue")
);

createApp(app)
    .use(createPinia())
    .use(router)
    .component("Spinner", Spinner)
    .component("Input", Input)
    .component("Button", Button)
    .component("Alert", Alert)
    .component("Modal", Modal)
    .component("FormHead", FormHead)
    .component("layout", Layout)
    .component("DataTable", DataTable)
    .component("Drapzone", Drapzone)
    .mount("#app");
