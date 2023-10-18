import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@a/store/auth.js";
import { useSharedStore } from "@s/store/shared.js";

export function useAuth() {
    const router = useRouter();
    const auth = useAuthStore();
    const shared = useSharedStore();

    const alert = ref("");

    const formInputs = ref({
        email: "",
        password: "",
    });

    const loginValidated = async () => {
        shared.setIsLoading(true);
        const response = await auth.setLogin(formInputs.value.email, formInputs.value.password);

        shared.setIsLoading(false);
        response.status == 200
            ? router.push({ name: "module-home" })
            : alert.value = response.message;
    };

    const closeModal = () => alert.value = "";

    // Devolver las referencias reactivas como resultado del composable
    return { alert, formInputs, loginValidated, closeModal };
}
