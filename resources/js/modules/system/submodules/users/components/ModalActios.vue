<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    item: {
        type: Object,
        required: true,
    },
});

const emits = defineEmits(["closeModal"]);
</script>

<template>
    <Modal :title="props.title" @close-modal="$emit('closeModal')">
        <div class="w-full mb-4 p-4 border border-gray-300 rounded-xl">
            <table>
                <tbody>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Nit y digito:
                        </td>
                        <td class="px-4 py-2">
                            {{ item.nit }} - {{ item.digito }}
                        </td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Nombre:
                        </td>
                        <td class="px-4 py-2">{{ item.nombre }}</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Representante:
                        </td>
                        <td class="px-4 py-2">{{ item.representante }}</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Telefono:
                        </td>
                        <td class="px-4 py-2">{{ item.telefono }}</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Direccion:
                        </td>
                        <td class="px-4 py-2">{{ item.direccion }}</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Email:
                        </td>
                        <td class="px-4 py-2">{{ item.email }}</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Ciudad:
                        </td>
                        <td class="px-4 py-2">{{ item.ciudad }}</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Contacto:
                        </td>
                        <td class="px-4 py-2">{{ item.contacto }}</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Email tecnico:
                        </td>
                        <td class="px-4 py-2">{{ item.email_tec }}</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Email logistica:
                        </td>
                        <td class="px-4 py-2">{{ item.email_logis }}</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 font-semibold text-blue-950">
                            Estado:
                        </td>
                        <td class="px-4 py-2">
                            {{ item.status }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="flex">
                <div class="w-1/2 p-1">
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
                        name="Permisos"
                        type="permissions"
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
