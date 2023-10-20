<script setup>
import Sidebar from "./layout/Sidebar.vue";
import Head from "./layout/Head.vue";
import Search from "./layout/Search.vue";
import Content from "./layout/Content.vue";
import ModalLogout from "./layout/ModalLogout.vue";

import { useLayout } from "@s/composables";

const { name, email, nit, modal, openModal, closeModal } = useLayout();
</script>

<template>
    <Sidebar>
        <Head :name="name" @open-modal="openModal">
            <Search></Search>
            <Content>
                <slot></slot>
            </Content>
        </Head>
    </Sidebar>
    <ModalLogout
        :name="name"
        :email="email"
        :nit="nit"
        v-show="modal"
        @close-modal="closeModal"
    ></ModalLogout>
</template>
