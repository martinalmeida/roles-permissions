<script setup>
const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    logout: {
        type: String,
        required: false,
    },
});
const emits = defineEmits(["closeModal"]);
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
        <div
            class="relative z-10 p-6 w-96 rounded-lg shadow-lg bg-white text-black"
        >
            <h2 v-if="title" class="text-xl font-semibold mb-4 text-center">
                {{ title }}
            </h2>
            <slot></slot>
            <div class="flex justify-center">
                <a
                    v-if="logout"
                    class="px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600"
                    href="/logout"
                >
                    {{ logout }}
                </a>
                <button
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="$emit('closeModal')"
                >
                    Cancelar
                </button>
            </div>
        </div>
    </div>
</template>
