<script setup>
import { useAuth } from "@a/composables";

const { formInputs, loginValidated } = useAuth();
</script>

<template>
    <form class="mb-4">
        <div class="p-4">
            <Input
                required
                type="email"
                label="Ingresa tu correo electronico"
                name="email"
                v-model="formInputs.email"
            ></Input>
        </div>
        <div class="p-4">
            <Input
                required
                type="password"
                label="Ingresa tu contraseña"
                name="password"
                v-model="formInputs.password"
            ></Input>
        </div>
        <div class="p-4">
            <Button
                name="Iniciar Sesión"
                type="login"
                @action-button="loginValidated"
            ></Button>
        </div>
    </form>
</template>
