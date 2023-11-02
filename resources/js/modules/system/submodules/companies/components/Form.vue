<script setup>
import { useForm } from "@c/composables";

const { formInputs, saveData } = useForm();
</script>

<template>
    <FormHead title="Crear una nueva Empresa:" route="/empresas">
        <form class="mb-4">
            <div class="grid grid-cols-2 gap-4 p-4">
                <div class="p-4">
                    <Input
                        required="true"
                        type="number"
                        label="Nit de la empresa"
                        name="nit"
                        v-model="formInputs.nit"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required="true"
                        type="number"
                        label="Digito de verificación"
                        name="digito"
                        v-model="formInputs.digito"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required="true"
                        type="text"
                        label="Nombre de la empresa"
                        name="nombre"
                        v-model="formInputs.nombre"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required="true"
                        type="text"
                        label="Representante legal"
                        name="representante"
                        v-model="formInputs.representante"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required="true"
                        type="number"
                        label="Teléfono de la empresa"
                        name="telefono"
                        v-model="formInputs.telefono"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required="true"
                        type="text"
                        label="Dirección de la empresa"
                        name="direccion"
                        v-model="formInputs.direccion"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required="true"
                        type="email"
                        label="Correo de la empresa"
                        name="email"
                        v-model="formInputs.email"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        type="text"
                        label="Pais de la empresa"
                        name="pais"
                        v-model="formInputs.pais"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        type="text"
                        label="Ciudad de la empresa"
                        name="ciudad"
                        v-model="formInputs.ciudad"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        type="number"
                        label="Contacto de la empresa"
                        name="contacto"
                        v-model="formInputs.contacto"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        type="text"
                        label="Correo de contacto de la empresa"
                        name="email_tec"
                        v-model="formInputs.email_tec"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        type="text"
                        label="Correo de logistica de la empresa"
                        name="email_logis"
                        v-model="formInputs.email_logis"
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
