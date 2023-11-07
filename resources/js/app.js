import './bootstrap';

import { createApp, defineAsyncComponent } from 'vue';
import { createPinia } from 'pinia';

import app from '@/modules/app.vue';
import router from '@/router/index.js'

// Globals Simples Components
import Spinner from "@s/components/Spinner.vue";
import Input from "@s/components/Input.vue";
import Alert from "@s/components/Alert.vue";
import FormHead from "@s/components/FormHead.vue";

// Globals Async Components
const Layout = defineAsyncComponent(
    () => import("@s/components/Layout.vue")
);
const Modal = defineAsyncComponent(
    () => import("@s/components/Modal.vue")
);
const Button = defineAsyncComponent(
    () => import("@s/components/Button.vue")
);
const Drapzone = defineAsyncComponent(
    () => import("@s/components/Drapzone.vue")
);

// DataTables Components
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

createApp(app)
    .use(createPinia())
    .use(router)
    .component("Spinner", Spinner)
    .component("Input", Input)
    .component("Drapzone", Drapzone)
    .component("Button", Button)
    .component("Alert", Alert)
    .component("FormHead", FormHead)
    .component("layout", Layout)
    .component("Modal", Modal)
    .component('DataTable', Vue3EasyDataTable)
    .mount("#app");
