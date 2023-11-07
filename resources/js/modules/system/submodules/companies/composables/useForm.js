import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCompaniesStore } from "@c/store/companies.js";

export function useForm() {
    const router = useRouter();
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

    const saveData = async () => {
        const response = await companies.setCreateComapany(formInputs.value);
        if (response.status === 200) {
            router.push({ name: "companys-index" });
        }
    };

    // Devolver las referencias reactivas como resultado del composable
    return { formInputs, saveData };
}