<script setup>
import { useTable } from "@c/composables";

const { createCompany } = useTable();
</script>

<template>
    <article class="w-full p-4">
        <DataTable
            title="Listado de Empresas"
            create="Crear Empresa"
            @event-create="createCompany"
        ></DataTable>
    </article>
</template>
