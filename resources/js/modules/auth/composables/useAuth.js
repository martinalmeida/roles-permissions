import { ref, onMounted } from "vue";
import { useSharedStore } from "@s/store/shared.js";
import { useAuthStore } from "@a/store/auth.js";

export function useAuth() {
    const shared = useSharedStore();
    const auth = useAuthStore();

    const formInputs = ref({
        email: "",
        password: "",
    });

    const loginValidated = async () => await auth.setLogin(formInputs.value.email, formInputs.value.password);

    onMounted(() => shared.setIsLoading(false));

    // Devolver las referencias reactivas como resultado del composable
    return { formInputs, loginValidated };
}
