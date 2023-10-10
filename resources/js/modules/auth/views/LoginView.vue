<template>
    <Content title="Login" subtitle="Login to access your account">
        <div class="mb-4">
            <label for="email" class="mb-1 block text-sm text-gray-600"
                >Email Address</label
            >
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                class="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
            />
        </div>
        <div class="mb-6">
            <div class="mb-1 flex justify-between">
                <label for="password" class="text-sm text-gray-600"
                    >Password</label
                >
            </div>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                class="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
            />
        </div>
        <div class="mb-6">
            <button
                type="button"
                class="w-full rounded bg-indigo-500 pt-2 pb-3 text-white duration-100 ease-in-out hover:bg-indigo-600 focus:outline-none"
            >
                Login
            </button>
        </div>
    </Content>
</template>

<script setup>
import { useAuthStore } from "@/modules/auth/store/authStore.js";

import Content from "@/modules/shared/components/auth/Content.vue";

const authStore = useAuthStore();
</script>
