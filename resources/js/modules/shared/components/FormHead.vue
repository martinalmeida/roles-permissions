<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    route: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="w-full max-h-full">
        <div
            class="mx-8 mt-8 bg-white border border-gray-200 rounded-xl sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
            <div class="flex items-center px-8">
                <h5
                    class="mb-2 text-2xl font-bold text-blue-950 dark:text-white flex-grow"
                >
                    {{ props.title }}
                </h5>
                <div class="flex space-x-2">
                    <router-link :to="props.route">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 text-blue-950 dark:text-white"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                            />
                        </svg>
                    </router-link>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
