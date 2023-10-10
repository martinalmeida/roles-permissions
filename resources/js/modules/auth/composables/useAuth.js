import { ref } from "vue";
import { useRouter } from "vue-router";
import { coreApi } from "@/lib";

export function useAuth() {
    const router = useRouter(); // Acceder al objeto del enrutador de Vue

    let formInputs = ref({
        email: "",
        password: "",
    });

    const loginValidated = async () => {
        try {
            // Realizar una solicitud HTTP para actualizar el rol del usuario
            const response = await coreApi("/validated", "POST", JSON.stringify({
                email: formInputs.value.email,
                password: formInputs.value.password,
            })); 

            const result = await response.json();

            // Redirigir a una ruta según el estatus de la respuesta
            result.status
                ? router.push({ name: "module-home" })
                : router.push({ name: "auth-login" });
        } catch (error) {
            console.log(error);
        }
    };

    // Devolver las referencias reactivas como resultado del composable
    return { formInputs, loginValidated };
}
