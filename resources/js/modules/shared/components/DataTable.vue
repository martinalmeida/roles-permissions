<script setup>
import { useDataTable } from "@s/composables";

const props = defineProps({
    moduleTitle: {
        type: String,
        required: true,
    },
    addTitle: {
        type: String,
        required: false,
    },
    headers: {
        type: Array,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    search: {
        type: String,
        required: true,
    },
});

const emits = defineEmits(["addRegister"]);

const { searchField, searchValue, showRow } = useDataTable(props.search);
</script>

<template>
    <div
        class="mx-8 mt-8 bg-white border border-gray-200 rounded-xl sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
        <div class="flex items-center">
            <h5
                class="mb-2 text-3xl font-bold text-blue-950 dark:text-white flex-grow"
            >
                {{ props.moduleTitle }}
            </h5>
            <div class="flex space-x-2">
                <button
                    type="button"
                    class="text-white bg-rose-500 hover:bg-rose-600 font-medium rounded-lg text-sm px-5 py-2.5 flex"
                    @click="$emit('addRegister')"
                >
                    <div class="mr-1">
                        {{ props.addTitle }}
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
        <input
            class="border border-gray-400 rounded p-1 text-sm mb-2"
            type="text"
            placeholder="Busqueda en tabla"
            v-model="searchValue"
        />

        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            <DataTable
                table-class-name="data-table"
                buttons-pagination
                :headers="headers"
                :items="items"
                :search-field="searchField"
                :search-value="searchValue"
                @click-row="showRow"
            />
        </p>
    </div>
</template>

<style scoped>
.data-table {
    --easy-table-border: none;
    --easy-table-row-border: none;

    --easy-table-header-font-color: #ffffff;
    --easy-table-header-background-color: #eb3f61;

    --easy-table-body-row-hover-font-color: #eb3f61;
    --easy-table-body-row-hover-background-color: #fbf1f3;
}
</style>
