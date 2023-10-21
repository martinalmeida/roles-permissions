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
            modules: [
                {
                    id: 1,
                    name: "Permisos y Modulos",
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">   <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /> </svg>',
                    description: "Permisos y Modulos del sistema",
                    selected: false,
                    subModules: [
                        {
                            id: 1,
                            name: "Permisos",
                            page: "permisos",
                            description: "Permisos del sistema",
                            moduleId: 1,
                            r: 1,
                            w: 1,
                            u: 1,
                            d: 1,
                            selected: false,
                        },
                        {
                            id: 2,
                            name: "Modulos",
                            page: "moduls",
                            description: "Modulos del sistema",
                            moduleId: 1,
                            r: 1,
                            w: 1,
                            u: 1,
                            d: 1,
                            selected: false,
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Usuarios y Roles",
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>',
                    description: "Usuarios y Roles del sistema",
                    r: 1,
                    w: 1,
                    u: 1,
                    d: 1,
                    selected: false,
                    subModules: [
                        {
                            id: 1,
                            name: "Roles",
                            page: "roles",
                            description: "Roles del sistema",
                            moduleId: 2,
                            r: 1,
                            w: 1,
                            u: 1,
                            d: 1,
                            selected: false,
                        },
                        {
                            id: 2,
                            name: "Usuarios",
                            page: "users",
                            description: "Usuarios del sistema",
                            moduleId: 2,
                            r: 1,
                            w: 1,
                            u: 1,
                            d: 1,
                            selected: false,
                        },
                    ]
                },
            ],
        }
    },
});