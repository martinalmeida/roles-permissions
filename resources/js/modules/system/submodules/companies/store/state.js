import { defineStore } from "pinia";

export const useState = defineStore("companies.state", {
    state: () => {
        return {
            company: {
                id: 0,
                nit: 0,
                digito: 0,
                nombre: "",
                representante: "",
                telefono: 0,
                direccion: "",
                email: "",
                pais: "",
                ciudad: "",
                contacto: 0,
                email_tec: "",
                email_logis: "",
                image: "",
                status: 0,
            },
            getCompanies: [
                {
                    id: 0,
                    nit: 0,
                    digito: 0,
                    nombre: "",
                    representante: "",
                    telefono: 0,
                    direccion: "",
                    email: "",
                    pais: "",
                    ciudad: "",
                    contacto: 0,
                    email_tec: "",
                    email_logis: "",
                    image: "",
                    status: 0,
                },
            ],
        }
    },
});