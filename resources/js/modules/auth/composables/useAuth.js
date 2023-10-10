import { ref } from "vue";
import { useRouter } from "vue-router";

export function useAuth() {
    const router = useRouter(); // Acceder al objeto del enrutador de Vue

    let formInputs = ref({
        email: "",
        password: "",
    });

    const loginValidated = async () => {
        try {
            // Realizar una solicitud HTTP para actualizar el rol del usuario
            const response = await fetch("/validated", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-csrf-token": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                },
                body: JSON.stringify({
                    email: formInputs.value.email,
                    password: formInputs.value.password,
                }),
            });
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
