import { defineStore } from "pinia";

export const useState = defineStore("users.state", {
    state: () => {
        return {
            getUsers: [
                {
                    id: 0,
                    name: "",
                    a_paterno: "",
                    a_materno: "",
                    telefono: 0,
                    nombrefiscal: "",
                    direccionfiscal: "",
                    email: "",
                    email_verified_at: "",
                    status: 0,
                    rol_id: 0,
                    nit: 0,
                    created_at: "",
                    updated_at: "",
                    user_status: {
                        id_state: 0,
                        state: "",
                    },
                    user_rol: {
                        id: 0,
                        name: "",
                    },
                },
            ],
            user: {
                id: 0,
                name: "",
                a_paterno: "",
                a_materno: "",
                telefono: 0,
                nombrefiscal: "",
                direccionfiscal: "",
                email: "",
                email_verified_at: "",
                status: 0,
                rol_id: 0,
                nit: 0,
                created_at: "",
                updated_at: "",
                user_status: {
                    id_state: 0,
                    state: "",
                },
                user_rol: {
                    id: 0,
                    name: "",
                },
            },
        }
    },
});