import { defineStore } from "pinia";

export const useState = defineStore("shared.state", {
    state: () => {
        return {
            isLoading: false,
            alert: {
                active: false,
                title: "",
                close: "",
                type: "",
                message: "",
            },
            modal: {
                active: false,
                title: "",
                close: "",
            },
            user: {
                name: "",
                aPaterno: "",
                aMaterno: "",
                telefono: "",
                nombrefiscal: "",
                direccionfiscal: "",
                email: "",
                status: "",
                rolId: 0,
                nit: 0,
            },
            modules: {
                id: 1,
                name: "Roles y Permisos",
                icon: "mdi-account-key",
                description: "Roles y permisos del sistema",
                status: 0,
                subModules: [
                    {
                        name: "Roles",
                        page: "roles",
                        description: "Roles del sistema",
                        status: 0,
                        moduleId: 1
                    },
                    {
                        name: "Permisos",
                        page: "permissions",
                        description: "Permisos del sistema",
                        status: 0,
                        moduleId: 1
                    },
                ]
            },
        }
    },
});