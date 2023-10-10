import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/modules/auth/store/auth.js";

export function useAuth() {
    const router = useRouter(); // Acceder al objeto del enrutador de Vue
    const auth = useAuthStore();

    let formInputs = ref({
        email: "",
        password: "",
    });

    const loginValidated = async () => {
        const response = await auth.setLogin(formInputs.value.email, formInputs.value.password);
        response.status === 200
            ? router.push({ name: "module-home" })
            : router.push({ name: "auth-login" });
    };

    // Devolver las referencias reactivas como resultado del composable
    return { formInputs, loginValidated };
}
