<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    company_id: {
        type: Number,
        required: true,
    },
});
const emits = defineEmits(["systemLogout", "closeModal"]);
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
        <div
            class="relative z-10 p-6 w-96 rounded-xl shadow-lg bg-white text-black"
        >
            <h2 class="text-xl font-bold mb-4 text-center text-blue-950">
                Cerrar Sesión
            </h2>
            <div class="flex items-center justify-center mb-4">
                <div class="w-16 h-16 rounded-full overflow-hidden">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwCMklPSjWskv-h882rGhfoJ4EICgUDcmELQ&usqp=CAU"
                        alt="Imagen de perfil"
                    />
                </div>
            </div>
            <div class="mb-4 text-center">
                <p>{{ name }}</p>
                <p>{{ email }}</p>
                <p>company_id: {{ company_id }}</p>
            </div>
            <div class="flex justify-center">
                <button
                    class="px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-950 flex"
                    @click="$emit('systemLogout')"
                >
                    <div class="mr-1">Cerrar Sesión</div>
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
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                            />
                        </svg>
                    </div>
                </button>
                <button
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="$emit('closeModal')"
                >
                    Cancelar
                </button>
            </div>
        </div>
    </div>
</template>
