import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useState } from "./state";
import { login } from "@a/services";
import { useSharedStore } from "@s/store/shared.js";

export const useActions = defineStore("auth.actions", () => {
    const router = useRouter();
    const state = useState();

    const shared = useSharedStore();

    const setLogin = async (email, password) => {
        shared.setIsLoading(true);
        let typeAlert = "danger";
        state.email = email;
        state.password = password;

        const { result, status } = await login({
            email: state.email,
            password: state.password
        });

        if (status === 200) {
            shared.setToken(result.authorization.token);
            typeAlert = "success";
            router.push({ name: "home-module" });
        }

        shared.setIsLoading(false);

        shared.setAlert(
            true,
            "Inicio de sesión",
            "cerrar",
            typeAlert,
            result.message
        );
    };

    return {
        setLogin,
    };
});