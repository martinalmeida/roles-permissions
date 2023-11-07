<script setup>
import { useDrapzone } from "@s/composables";

const props = defineProps({
    acept: {
        type: String,
        required: true,
    },
});

const { fileInputRef, handleFileChange, hasFile, selectedFileName, clearFile } =
    useDrapzone();
</script>

<template>
    <div class="mb-4 p-4">
        <div class="flex items-center justify-center">
            <label
                class="relative flex flex-col justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none text-center"
            >
                <span class="flex items-center space-x-2 justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-gray-500"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                        />
                    </svg>
                    <span
                        v-if="acept === 'image'"
                        class="font-medium text-gray-600"
                    >
                        Suelta tu imagen para adjuntar o
                        <span class="text-blue-600 underline"
                            >busca en archivos</span
                        >
                    </span>
                    <span
                        v-if="acept === 'doc'"
                        class="font-medium text-gray-600"
                    >
                        Suelta tu archivo para adjuntar o
                        <span class="text-blue-600 underline"
                            >busca en archivos</span
                        >
                    </span>
                </span>
                <input
                    v-if="acept === 'image'"
                    accept="image/png, image/jpeg"
                    type="file"
                    class="hidden"
                    @change="handleFileChange"
                    ref="fileInputRef"
                />
                <input
                    v-if="acept === 'doc'"
                    accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    type="file"
                    class="hidden"
                    @change="handleFileChange"
                    ref="fileInputRef"
                />
                <span
                    v-if="hasFile"
                    class="p-2 bg-white bg-opacity-80 text-gray-600 text-xs flex items-center justify-center"
                >
                    {{ selectedFileName }}
                    <button
                        @click="clearFile"
                        class="text-red-600 ml-2 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                    </button>
                </span>
            </label>
        </div>
    </div>
</template>
