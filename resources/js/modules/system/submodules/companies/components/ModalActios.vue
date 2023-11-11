<script setup>
import { ref, onMounted } from "vue";
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
const urlImage = ref("");

onMounted(() => {
    urlImage.value = props.item.image;
});
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
                            Logo de Empresa:
                        </td>
                        <td class="px-4 py-2">
                            <img :src="urlImage" />
                        </td>
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
        </div>
    </Modal>
</template>
