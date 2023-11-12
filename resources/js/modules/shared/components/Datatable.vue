<script setup>
import HeaderTable from "./DataTable/HeaderTable.vue";
import Table from "./DataTable/Head.vue";

const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    create: {
        type: String,
        required: false,
    },
});

const emits = defineEmits(["eventCreate"]);
</script>

<template>
    <HeaderTable></HeaderTable>
    <Table></Table>
</template>
