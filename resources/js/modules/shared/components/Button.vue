<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="mb-6">
        <button
            :type="props.type"
            class="w-full rounded bg-indigo-500 pt-2 pb-3 text-white duration-100 ease-in-out hover:bg-indigo-600 focus:outline-none"
        >
            {{ props.name }}
        </button>
    </div>
</template>
