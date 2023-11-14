import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useSharedStore } from "@s/store/shared.js";
import { useAuthStore } from "@a/store/auth.js";

export function useAuth() {
    const router = useRouter();
    const shared = useSharedStore();
    const auth = useAuthStore();

    const formInputs = ref({
        email: "",
        password: "",
    });

    const loginValidated = async () => {
        const response = await auth.setLogin(formInputs.value.email, formInputs.value.password);
        if (await response.status === 200) {
            router.push({ name: "home-module" });
        }
    };

    onMounted(() => shared.setIsLoading(false));

    // Devolver las referencias reactivas como resultado del composable
    return { formInputs, loginValidated };
}
