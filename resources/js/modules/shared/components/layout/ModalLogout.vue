<script setup>
const emits = defineEmits(["closeModal"]);
</script>

<template>
    <Modal>
        <h2 class="text-xl font-semibold mb-4 text-center">Cerrar Sesión</h2>
        <div class="flex items-center justify-center mb-4">
            <div class="w-16 h-16 rounded-full overflow-hidden">
                <img
                    src="https://static.mercadonegro.pe/wp-content/uploads/2022/04/01135046/imagenes-de-campanas-publicitarias.jpg"
                    alt="Imagen de perfil"
                />
            </div>
        </div>
        <div class="mb-4 text-center">
            <p><strong>Nombre:</strong> Usuario de Ejemplo</p>
            <p>
                <strong>Correo Electrónico:</strong>
                ejemplo@example.com
            </p>
            <p><strong>NIT:</strong> 1234567890</p>
        </div>
        <div class="flex justify-center">
            <a
                class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                href="/logout"
            >
                Cerrar Sesión
            </a>
            <button
                class="ml-2 px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 hover:text-white"
                @click="$emit('closeModal')"
            >
                Cancelar
            </button>
        </div>
    </Modal>
</template>
