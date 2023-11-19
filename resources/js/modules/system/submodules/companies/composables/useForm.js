import { ref } from "vue";
import { useCompaniesStore } from "@c/store/companies.js";

export function useForm() {
    const companies = useCompaniesStore();

    const form = ref({
        imputs: {
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
        },
        required: {
            nit: "",
            digito: "",
            nombre: "",
            representante: "",
            telefono: "",
            direccion: "",
            email: "",
            pais: "",
        },
    });

    const setEmpty = (message) => {
        form.value.required = {
            nit: (message.nit?.toString() || "").slice(2, -2).replace(/'/g, ''),
            digito: (message.digito?.toString() || "").slice(2, -2).replace(/'/g, ''),
            nombre: (message.nombre?.toString() || "").slice(2, -2).replace(/'/g, ''),
            representante: (message.representante?.toString() || "").slice(2, -2).replace(/'/g, ''),
            telefono: (message.telefono?.toString() || "").slice(2, -2).replace(/'/g, ''),
            direccion: (message.direccion?.toString() || "").slice(2, -2).replace(/'/g, ''),
            email: (message.email?.toString() || "").slice(2, -2).replace(/'/g, ''),
            pais: (message.pais?.toString() || "").slice(2, -2).replace(/'/g, ''),
        };
    };

    const saveData = async () => {
        const { result, status } = await companies.setCreateComapany(form.value.imputs);
        if (status === 400) {
            setEmpty(result.message);
        }
    };

    // Devolver las referencias reactivas como resultado del composable
    return { form, saveData };
}