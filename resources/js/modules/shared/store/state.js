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
            modalLogout: {
                active: false,
                close: "",
            },
            modal: {
                active: false,
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
            modules: [
                {
                    id: 0,
                    name: "",
                    icon: "",
                    description: "",
                    selected: false,
                    subModules: [
                        {
                            id: 1,
                            name: "",
                            page: "",
                            description: "",
                            moduleId: 0,
                            r: 0,
                            w: 0,
                            u: 0,
                            d: 0,
                            selected: false,
                        },
                    ]
                },
            ],
            searchModule: false,
            file: {},
        }
    },
});