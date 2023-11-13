<script setup>
import BodyTable from "./DataTable/Body.vue";
import HeaderTable from "./DataTable/Header.vue";
import Table from "./DataTable/Table.vue";

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
    <BodyTable>
        <template #headerContent>
            <HeaderTable
                :title="title"
                :create="create"
                @event-create="$emit('eventCreate')"
            ></HeaderTable>
        </template>
        <Table></Table>
    </BodyTable>
</template>
