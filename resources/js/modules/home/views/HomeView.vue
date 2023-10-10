<template>
    <Sidebar>
        <Head>
            <Search></Search>
            <Content></Content>
        </Head>
    </Sidebar>
</template>

<script setup>
import { useHomeStore } from "@/modules/home/store/homeStore.js";

import Sidebar from "@/modules/shared/components/home/sidebar.vue";
import Head from "@/modules/shared/components/home/Head.vue";
import Search from "@/modules/shared/components/home/Search.vue";
import Content from "@/modules/shared/components/home/Content.vue";

const homeStore = useHomeStore();
</script>
