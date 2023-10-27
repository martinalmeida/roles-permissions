<script setup>
import { useAuth } from "@a/composables";

const { formInputs, loginValidated } = useAuth();
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
            type="login"
            @action-button="loginValidated"
        ></Button>
    </form>
</template>
