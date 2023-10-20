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
    nit: {
        type: Number,
        required: true,
    },
});
</script>

<template>
    <Modal title="Cerrar Sesión" logout="Cerrar Sesión">
        <div class="flex items-center justify-center mb-4">
            <div class="w-16 h-16 rounded-full overflow-hidden">
                <img
                    src="https://static.mercadonegro.pe/wp-content/uploads/2022/04/01135046/imagenes-de-campanas-publicitarias.jpg"
                    alt="Imagen de perfil"
                />
            </div>
        </div>
        <div class="mb-4 text-center">
            <p>{{ props.name }}</p>
            <p>{{ props.email }}</p>
            <p>NIT: {{ props.nit }}</p>
        </div>
    </Modal>
</template>
