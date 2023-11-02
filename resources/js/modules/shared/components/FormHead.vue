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
                            class="w-7 h-7 text-blue-950 dark:text-white"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </router-link>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
