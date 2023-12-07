<script setup>
const props = defineProps({
    items: {
        type: Object,
        required: true,
    },
});
const emits = defineEmits(["editButton", "stateButton", "deleteButton"]);
</script>
<template>
    <table class="min-w-full leading-normal">
        <thead>
            <tr>
                <th
                    v-for="(title, index) in items.titles"
                    :key="index"
                    class="px-5 py-3 border border-gray-200 bg-rose-500 text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                    {{ title }}
                </th>
                <th
                    class="px-5 py-3 border border-gray-200 bg-rose-500 text-white text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                    Acciones
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(item, rowIndex) in items.data"
                :key="rowIndex"
                class="bg-white text-gray-900 hover:bg-rose-50 hover:text-rose-600"
            >
                <td
                    v-for="(cell, cellIndex) in item"
                    :key="cellIndex"
                    class="px-5 py-5 border border-gray-200 text-sm"
                >
                    <p class="whitespace-no-wrap">{{ cell }}</p>
                </td>
                <td
                    v-if="items.actions"
                    class="px-5 py-5 border border-gray-200 text-sm"
                >
                    <div class="flex space-x-2">
                        <button
                            v-if="items.actions.edit"
                            @click="emits('editButton', item)"
                            title="Editar el registro"
                            type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-rose-500 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mb-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                            </svg>
                        </button>
                        <button
                            v-if="items.actions.state"
                            @click="emits('stateButton', item)"
                            title="Cambiar estado del registro"
                            type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-rose-500 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mb-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                                />
                            </svg>
                        </button>
                        <button
                            v-if="items.actions.delete"
                            @click="emits('deleteButton', item)"
                            title="Eliminar el registro"
                            type="button"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-rose-500 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mb-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
