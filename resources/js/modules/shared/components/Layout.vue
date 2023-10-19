<script setup>
import Sidebar from "./layout/sidebar.vue";
import Head from "./layout/Head.vue";
import Search from "./layout/Search.vue";
import Content from "./layout/Content.vue";
</script>

<template>
    <Sidebar>
        <Head>
            <Search></Search>
            <Content>
                <slot></slot>
            </Content>
        </Head>
    </Sidebar>
</template>
