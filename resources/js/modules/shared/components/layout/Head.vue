<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    subModules: {
        type: Array,
        required: false,
    },
});

const emits = defineEmits(["openModal", "openModule"]);
</script>

<template>
    <div
        class="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10"
    >
        <div
            v-for="item in subModules"
            :key="item.id"
            class="flex h-full text-gray-600 dark:text-gray-400"
        >
            <router-link
                v-if="item.selected"
                :title="item.description"
                @click="$emit('openModule', item.id)"
                :to="item.page"
                class="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center"
            >
                {{ item.name }}
            </router-link>
            <router-link
                v-else
                :title="item.description"
                @click="$emit('openModule', item.id)"
                :to="item.page"
                class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8"
            >
                {{ item.name }}
            </router-link>
        </div>
        <div class="ml-auto flex items-center space-x-7">
            <button class="flex items-center" @click="$emit('openModal')">
                <span class="relative flex-shrink-0">
                    <img
                        class="w-7 h-7 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwCMklPSjWskv-h882rGhfoJ4EICgUDcmELQ&usqp=CAU"
                        alt="profile"
                    />
                    <span
                        class="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"
                    ></span>
                </span>
                <span class="ml-2">{{ name }}</span>
                <svg
                    viewBox="0 0 24 24"
                    class="w-4 ml-1 flex-shrink-0"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
        </div>
    </div>
    <div class="flex-grow flex overflow-x-hidden">
        <slot></slot>
    </div>
</template>
