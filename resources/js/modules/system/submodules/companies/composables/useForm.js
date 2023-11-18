import { ref } from "vue";
import { useCompaniesStore } from "@c/store/companies.js";

export function useForm() {
    const companies = useCompaniesStore();

    const formInputs = ref({
        nit: "",
        digito: "",
        nombre: "",
        representante: "",
        telefono: "",
        direccion: "",
        email: "",
        pais: "",
        ciudad: "",
        contacto: "",
        email_tec: "",
        email_logis: "",
    });

    const saveData = async () => await companies.setCreateComapany(formInputs.value);

    // Devolver las referencias reactivas como resultado del composable
    return { formInputs, saveData };
}