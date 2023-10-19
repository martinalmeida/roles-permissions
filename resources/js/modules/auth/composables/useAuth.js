import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@a/store/auth.js";

export function useAuth() {
    const router = useRouter();
    const auth = useAuthStore();

    const formInputs = ref({
        email: "",
        password: "",
    });

    const loginValidated = async () => {
        const response = await auth.setLogin(formInputs.value.email, formInputs.value.password);
        if (response.status === 200) {
            router.push({ name: "module-home" });
        }
    };

    // Devolver las referencias reactivas como resultado del composable
    return { formInputs, loginValidated };
}
