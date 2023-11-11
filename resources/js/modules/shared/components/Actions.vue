<template>
    <div class="flex">
        <div class="w-1/2 p-1">
            <Button
                name="Editar Registro"
                type="edit"
                @action-button=""
            ></Button>
        </div>
        <div class="w-1/3 p-1">
            <Button
                name="Cambiar Estado"
                type="state"
                @action-button=""
            ></Button>
        </div>
        <div class="w-1/3 p-1">
            <Button
                name="Editar Permisos"
                type="permissions"
                @action-button=""
            ></Button>
        </div>
        <div class="w-1/3 p-1">
            <Button
                name="Eliminar Registro"
                type="delete"
                @action-button=""
            ></Button>
        </div>
    </div>
</template>
