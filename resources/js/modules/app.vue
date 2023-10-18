<script setup>
import { useShared } from "@s/composables";

const { loading } = useShared();
</script>

<template>
    <Spinner v-show="loading"></Spinner>
    <router-view />
</template>
