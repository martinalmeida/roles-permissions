<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
        <div
            class="relative z-10 p-6 w-96 rounded-lg shadow-lg bg-white text-black"
        >
            <slot></slot>
        </div>
    </div>
</template>
