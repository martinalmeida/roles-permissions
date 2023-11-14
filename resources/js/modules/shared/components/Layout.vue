<script setup>
import Sidebar from "./layout/Sidebar.vue";
import Head from "./layout/Head.vue";
import Search from "./layout/Search.vue";
import Content from "./layout/Content.vue";
import ModalLogout from "./layout/ModalLogout.vue";

import { useLayout } from "@s/composables";

const {
    name,
    email,
    company_id,
    modal,
    openModal,
    closeModal,
    logout,
    modules,
    subModules,
    selectedModule,
    selectedSubModule,
    selectedSearch,
    setSelectedSearch,
} = useLayout();
</script>

<template>
    <Sidebar
        :modules="modules"
        @open-module="selectedModule"
        @open-search="setSelectedSearch"
    >
        <Head
            :name="name"
            :subModules="subModules"
            @open-modal="openModal"
            @open-module="selectedSubModule"
        >
            <Search v-if="selectedSearch"></Search>
            <Content>
                <slot></slot>
            </Content>
        </Head>
    </Sidebar>
    <ModalLogout
        :name="name"
        :email="email"
        :company_id="company_id"
        v-show="modal"
        @system-logout="logout"
        @close-modal="closeModal"
    ></ModalLogout>
</template>
