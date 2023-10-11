import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/modules/auth/store/auth.js";

export function useAuth() {
    const router = useRouter();
    const auth = useAuthStore();

    const alert = ref("");

    const formInputs = ref({
        email: "",
        password: "",
    });

    const loginValidated = async () => {
        const response = await auth.setLogin(formInputs.value.email, formInputs.value.password);
        console.log(response)
        response.status == 200
            ? router.push({ name: "module-home" })
            : alert.value = response.message;
    };

    const closeModal = () => alert.value = "";

    // Devolver las referencias reactivas como resultado del composable
    return { alert, formInputs, loginValidated, closeModal };
}
