<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
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
        <div class="mb-1 flex justify-between">
            <label
                :for="props.name"
                class="text-sm text-gray-600 dark:text-gray-300"
                >{{ props.label }}:</label
            >
        </div>
        <input
            :type="props.type"
            :name="props.name"
            :id="props.name"
            :placeholder="props.label"
            class="w-full bg-transparent rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>
