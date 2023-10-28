<script setup>
import { useTable } from "@r/composables";

const { DataTable, modal, closeModal, createRol, headers, items, item } =
    useTable();
</script>

<template>
    <DataTable
        moduleTitle="Tabla de administración de roles"
        addTitle="Agregar"
        :headers="headers"
        :items="items"
        search="name"
        @add-register="createRol"
    ></DataTable>
    <Modal v-if="modal" title="Que deseas hacer?" @close-modal="closeModal">
        <div class="w-96 mb-4 p-4 border border-gray-300 rounded-xl">
            <table>
                <tbody>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Nombre:
                        </td>
                        <td class="px-4 py-2">{{ item.name }}</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Descripción:
                        </td>
                        <td class="px-4 py-2">{{ item.description }}</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Estado:
                        </td>
                        <td class="px-4 py-2">
                            {{ item.status === 1 ? "Activo" : "Inactivo" }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="flex">
                <div class="w-1/3 p-1">
                    <Button
                        name="Editar"
                        type="edit"
                        @action-button=""
                    ></Button>
                </div>
                <div class="w-1/3 p-1">
                    <Button
                        name="Estado"
                        type="state"
                        @action-button=""
                    ></Button>
                </div>
                <div class="w-1/3 p-1">
                    <Button
                        name="Eliminar"
                        type="delete"
                        @action-button=""
                    ></Button>
                </div>
            </div>
        </div>
    </Modal>
</template>
