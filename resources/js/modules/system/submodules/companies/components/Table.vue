<script setup>
import { useTable } from "@c/composables";

const { DataTable, modal, closeModal, createCompany, headers, items, item } =
    useTable();

import ModalActios from "@c/components/ModalActios.vue";
</script>

<template>
    <DataTable
        moduleTitle="Tabla de Empresas"
        addTitle="Agregar Empresa"
        :headers="headers"
        :items="items"
        search="name"
        @add-register="createCompany"
    ></DataTable>
    <ModalActios
        v-if="modal"
        title="Que deseas hacer?"
        @close-modal="closeModal"
        :item="item"
    ></ModalActios>
</template>
