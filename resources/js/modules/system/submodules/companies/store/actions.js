import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useState } from "./state";
import { getCompanies, createCompany } from "@c/services";
import { useSharedStore } from "@s/store/shared.js";

export const useActions = defineStore("companies.actions", () => {
    const router = useRouter();
    const state = useState();
    const shared = useSharedStore();

    const actionVars = {
        typeAlert: null,
        messageAlert: null,
    };

    const setGetCompanies = async () => {
        shared.setIsLoading(true);
        const response = await getCompanies();
        state.getCompanies = response.data;
        shared.setIsLoading(false);
    };

    const setCreateComapany = async (data) => {
        shared.setIsLoading(true);
        actionVars.typeAlert = "danger";
        state.company = data;
        const fileObject = await shared.getFile;
        const { result, status } = await createCompany({
            nit: state.company.nit,
            digito: state.company.digito,
            nombre: state.company.nombre,
            representante: state.company.representante,
            telefono: state.company.telefono,
            direccion: state.company.direccion,
            email: state.company.email,
            pais: state.company.pais,
            ciudad: state.company.ciudad,
            contacto: state.company.contacto,
            email_tec: state.company.email_tec,
            email_logis: state.company.email_logis,
            image: fileObject,
        });

        if (status === 200) {
            router.push({ name: "companys-index" });
            actionVars.typeAlert = "success";
        }

        actionVars.messageAlert = result.message;
        shared.setIsLoading(false);

        shared.setAlert(
            true,
            "Aletar de Empresa",
            "cerrar",
            actionVars.typeAlert,
            actionVars.messageAlert
        );
    };

    return {
        setGetCompanies,
        setCreateComapany,
    };
});