<script setup>
const props = defineProps({
    title: {
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
            class="relative z-10 p-6 w-2/5 rounded-xl shadow-lg bg-white text-black"
        >
            <h2
                v-if="title"
                class="text-xl font-semibold mb-4 text-center text-blue-950"
            >
                {{ title }}
            </h2>
            <slot></slot>
            <div class="flex justify-center">
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
