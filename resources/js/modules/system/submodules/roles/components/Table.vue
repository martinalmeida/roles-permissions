<script setup>
import { useTable } from "@r/composables";

const { DataTable, modal, closeModal, createRol, headers, items, item } =
    useTable();

import ModalActios from "@r/components/ModalActios.vue";
</script>

<template>
    <DataTable
        moduleTitle="Tabla de administración de Roles y Permisos"
        addTitle="Agregar Rol"
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
