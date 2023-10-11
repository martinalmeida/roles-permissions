<script setup>
import { useAuth } from "@/modules/auth/composables";

import Input from "@/modules/shared/components/Input.vue";
import Button from "@/modules/shared/components/Button.vue";
import Modal from "@/modules/shared/components/Modal.vue";

const { alert, formInputs, loginValidated, closeModal } = useAuth();
</script>

<template>
    <form class="mb-4">
        <Input
            type="email"
            label="Ingresa tu correo electronico"
            name="email"
            v-model="formInputs.email"
        ></Input>
        <Input
            type="password"
            label="Ingresa tu contraseña"
            name="password"
            v-model="formInputs.password"
        ></Input>
        <Button
            name="Iniciar Sesión"
            type="button"
            @click="loginValidated"
        ></Button>
    </form>
    <Modal
        v-if="alert"
        title="Solicitud fallida!"
        close="Cerrar"
        type="danger"
        @close-event="closeModal"
    >
        {{ alert }}
    </Modal>
</template>
