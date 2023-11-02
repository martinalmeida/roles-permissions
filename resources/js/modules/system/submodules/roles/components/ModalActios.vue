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
                            {{ item.user_status.state }}
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
