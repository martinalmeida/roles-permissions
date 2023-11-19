<script setup>
import { useForm } from "@c/composables";

const { form, saveData } = useForm();
</script>

<template>
    <FormHead title="Crear una nueva Empresa:" route="/empresas">
        <form class="mb-4">
            <div class="grid grid-cols-2 gap-4 p-4">
                <div class="p-4">
                    <Input
                        required
                        :empty="form.required.nit"
                        type="number"
                        label="Nit de la empresa"
                        name="nit"
                        v-model="form.imputs.nit"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required
                        :empty="form.required.digito"
                        type="number"
                        label="Digito de verificación"
                        name="digito"
                        v-model="form.imputs.digito"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required
                        :empty="form.required.nombre"
                        type="text"
                        label="Nombre de la empresa"
                        name="nombre"
                        v-model="form.imputs.nombre"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required
                        :empty="form.required.representante"
                        type="text"
                        label="Representante legal"
                        name="representante"
                        v-model="form.imputs.representante"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required
                        :empty="form.required.telefono"
                        type="number"
                        label="Teléfono de la empresa"
                        name="telefono"
                        v-model="form.imputs.telefono"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required
                        :empty="form.required.direccion"
                        type="text"
                        label="Dirección de la empresa"
                        name="direccion"
                        v-model="form.imputs.direccion"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required
                        :empty="form.required.email"
                        type="email"
                        label="Correo de la empresa"
                        name="email"
                        v-model="form.imputs.email"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        required
                        :empty="form.required.pais"
                        type="text"
                        label="Pais de la empresa"
                        name="pais"
                        v-model="form.imputs.pais"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        type="text"
                        label="Ciudad de la empresa"
                        name="ciudad"
                        v-model="form.imputs.ciudad"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        type="number"
                        label="Contacto de la empresa"
                        name="contacto"
                        v-model="form.imputs.contacto"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        type="text"
                        label="Correo de contacto de la empresa"
                        name="email_tec"
                        v-model="form.imputs.email_tec"
                    ></Input>
                </div>
                <div class="p-4">
                    <Input
                        type="text"
                        label="Correo de logistica de la empresa"
                        name="email_logis"
                        v-model="form.imputs.email_logis"
                    ></Input>
                </div>
            </div>
            <Drapzone acept="image" />
            <div class="w-full flex justify-center">
                <div class="w-1/3">
                    <Button
                        name="Guardar Empresa"
                        type="save"
                        @action-button="saveData"
                    ></Button>
                </div>
            </div>
        </form>
    </FormHead>
</template>
