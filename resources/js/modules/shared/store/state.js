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
                name: "Roles y Permisos",
                icon: "mdi-account-key",
                subModules: [
                    {
                        name: "Roles",
                        url: "roles",
                    },
                    {
                        name: "Permisos",
                        url: "permissions",
                    },
                ]
            },
        }
    },
});