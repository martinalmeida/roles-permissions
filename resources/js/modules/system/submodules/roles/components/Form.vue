<script setup>
import { useForm } from "@r/composables";

const { formInputs, saveData } = useForm();
</script>

<template>
    <FormHead title="Crear un nuevo Rol:" route="/roles">
        <form class="mb-4">
            <div class="grid grid-cols-2 gap-4 p-4">
                <div class="p-4">
                    <Input
                        required
                        type="text"
                        label="Nombre del rol"
                        name="name"
                        v-model="formInputs.name"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required
                        type="text"
                        label="Descripción del rol"
                        name="description"
                        v-model="formInputs.description"
                    ></Input>
                </div>
            </div>
            <div class="w-full flex justify-center">
                <div class="w-1/3">
                    <Button
                        name="Guardar Rol"
                        type="save"
                        @action-button="saveData"
                    ></Button>
                </div>
            </div>
        </form>
    </FormHead>
</template>
