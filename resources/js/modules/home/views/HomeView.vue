<template>
    <Sidebar>
        <Head>
            <Search></Search>
            <Content></Content>
        </Head>
    </Sidebar>
</template>

<script setup>
import Sidebar from "@/modules/shared/components/layout/sidebar.vue";
import Head from "@/modules/shared/components/layout/Head.vue";
import Search from "@/modules/shared/components/layout/Search.vue";
import Content from "@/modules/shared/components/layout/Content.vue";
</script>
