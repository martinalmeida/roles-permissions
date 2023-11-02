import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRoleStore } from "@r/store/roles.js";

export function useForm() {
    const router = useRouter();
    const roles = useRoleStore();

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
        const response = await roles.setCreateRol(formInputs.value.name, formInputs.value.description);
        if (response.status === 200) {
            router.push({ name: "roles-index" });
        }
    };

    // Devolver las referencias reactivas como resultado del composable
    return { formInputs, saveData };
}