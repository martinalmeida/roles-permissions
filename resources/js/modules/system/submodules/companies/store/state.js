import { defineStore } from "pinia";

export const useState = defineStore("companies.state", {
    state: () => {
        return {
            getCompanies: [
                {
                    nit: 0,
                    digito: "",
                    nombre: "",
                    representante: "",
                    telefono: 0,
                    direccion: "",
                    email: "",
                    pais: "",
                    ciudad: "",
                    contacto: "",
                    email_tec: "",
                    email_logis: "",
                    image: "",
                    status: "",
                },
            ],
            company: {
                nit: 0,
                digito: "",
                nombre: "",
                representante: "",
                telefono: 0,
                direccion: "",
                email: "",
                pais: "",
                ciudad: "",
                contacto: "",
                email_tec: "",
                email_logis: "",
                image: "",
                status: "",
            },
        }
    },
});