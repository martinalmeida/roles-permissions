<script setup>
import { useTable } from "@c/composables";

const { modal, createCompany, closeModal } = useTable();

import ModalActios from "@c/components/ModalActios.vue";
</script>

<template>
    <article class="w-full p-4">
        <DataTable
            title="Listado de Empresas"
            create="Crear Empresa"
            @event-create="createCompany"
        ></DataTable>
    </article>
    <ModalActios
        v-if="modal"
        title="Que deseas hacer?"
        @close-modal="closeModal"
        :item="item"
    ></ModalActios>
</template>
