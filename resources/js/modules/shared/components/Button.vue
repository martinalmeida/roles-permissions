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

const emits = defineEmits(["actionButton"]);
</script>

<template>
    <button
        v-if="props.type === 'login'"
        type="button"
        class="w-full rounded bg-rose-500 pt-2 pb-3 text-white hover:bg-rose-600 justify-center flex"
        @click="$emit('actionButton')"
    >
        <div class="mr-1">
            {{ props.name }}
        </div>
        <div>
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
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
            </svg>
        </div>
    </button>
    <button
        v-if="props.type === 'save'"
        type="button"
        class="w-full rounded bg-rose-500 pt-2 pb-3 text-white hover:bg-rose-600 justify-center flex"
        @click="$emit('actionButton')"
    >
        <div class="mr-1">
            {{ props.name }}
        </div>
        <div>
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
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
            </svg>
        </div>
    </button>
    <button
        v-if="props.type === 'edit'"
        type="button"
        class="w-full rounded bg-cyan-500 pt-2 pb-3 text-white hover:bg-cyan-600 justify-center flex"
        @click="$emit('actionButton')"
    >
        <div class="mr-1">
            {{ props.name }}
        </div>
        <div>
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
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
            </svg>
        </div>
    </button>
    <button
        v-if="props.type === 'permissions'"
        type="button"
        class="w-full rounded bg-green-500 pt-2 pb-3 text-white hover:bg-green-600 justify-center flex"
        @click="$emit('actionButton')"
    >
        <div class="mr-1">
            {{ props.name }}
        </div>
        <div>
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
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
            </svg>
        </div>
    </button>
    <button
        v-if="props.type === 'state'"
        type="button"
        class="w-full rounded bg-indigo-800 pt-2 pb-3 text-white hover:bg-indigo-900 justify-center flex"
        @click="$emit('actionButton')"
    >
        <div class="mr-1">
            {{ props.name }}
        </div>
        <div>
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        </div>
    </button>
    <button
        v-if="props.type === 'delete'"
        type="button"
        class="w-full rounded bg-blue-950 pt-2 pb-3 text-white hover:bg-blue-900 justify-center flex"
        @click="$emit('actionButton')"
    >
        <div class="mr-1">
            {{ props.name }}
        </div>
        <div>
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
        </div>
    </button>
</template>
