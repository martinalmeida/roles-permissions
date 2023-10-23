<script setup>
import LogoTipo from "@/static/logotipo.svg";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div
        class="flex min-h-screen justify-center bg-gray-100 dark:bg-gray-900 dark:text-white font-sans"
    >
        <div
            class="container rounded my-auto max-w-md border-2 border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 p-3"
        >
            <div class="my-6 text-center">
                <img
                    :src="LogoTipo"
                    alt="Logotipo"
                    class="mx-auto"
                    width="100"
                    height="100"
                />
                <h1
                    class="text-3xl font-semibold text-gray-700 dark:text-white"
                >
                    {{ props.title }}
                </h1>
                <p class="text-gray-500 dark:text-gray-400">
                    {{ props.subtitle }}
                </p>
            </div>
            <div class="m-6">
                <slot></slot>
                <p class="text-center text-sm text-gray-400">
                    &copy; {{ new Date().getFullYear() }}
                </p>
            </div>
        </div>
    </div>
</template>
