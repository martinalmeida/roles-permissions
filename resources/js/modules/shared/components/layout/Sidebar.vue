<script setup>
const props = defineProps({
    modules: {
        type: Array,
        required: true,
    },
});
const emits = defineEmits(["openModule"]);
</script>

<template>
    <div
        class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm"
    >
        <div
            class="bg-white dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex"
        >
            <div
                class="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4"
            >
                <div class="h-10 w-12 flex items-center justify-center">
                    <img
                        src="../../../../static/logo.png"
                        alt="TransTrackMaster"
                        width="70%"
                        height="70%"
                    />
                </div>
                <button
                    class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
                <button
                    v-for="item in modules"
                    :key="item.id"
                    :title="item.description"
                    @click="$emit('openModule', item.id)"
                >
                    <div
                        v-if="item.selected"
                        class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center bg-blue-100 text-blue-500"
                        v-html="item.icon"
                    ></div>
                    <div
                        v-else
                        class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center"
                        v-html="item.icon"
                    ></div>
                </button>
            </div>
        </div>
        <div class="flex-grow overflow-hidden h-full flex flex-col">
            <slot></slot>
        </div>
    </div>
</template>
