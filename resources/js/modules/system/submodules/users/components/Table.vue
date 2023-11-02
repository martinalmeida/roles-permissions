<script setup>
import { useTable } from "@u/composables";

const { DataTable, modal, closeModal, createRol, headers, items, item } =
    useTable();

import ModalActios from "@c/components/ModalActios.vue";
</script>

<template>
    <DataTable
        moduleTitle="Tabla de Usuarios"
        addTitle="Agregar Usuario"
        :headers="headers"
        :items="items"
        search="name"
        @add-register="createRol"
    ></DataTable>
    <ModalActios
        v-if="modal"
        title="Que deseas hacer?"
        @close-modal="closeModal"
        :item="item"
    ></ModalActios>
</template>
