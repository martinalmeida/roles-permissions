<script setup>
import { useTable } from "@r/composables";

const { DataTable, modal, closeModal, headers, items, item } = useTable();
</script>

<template>
    <DataTable
        moduleTitle="Modulo de Roles"
        addTitle="Agregar Rol"
        :headers="headers"
        :items="items"
        search="name"
    ></DataTable>
    <Modal v-if="modal" title="Que deseas hacer?" @close-modal="closeModal">
        {{ item }}
    </Modal>
</template>
