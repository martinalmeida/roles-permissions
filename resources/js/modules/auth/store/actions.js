import { defineStore } from "pinia";
import { useState } from "./state";
import { login } from "@a/services";
import { useSharedStore } from "@s/store/shared.js";

export const useActions = defineStore("auth.actions", () => {
    const state = useState();

    const shared = useSharedStore();

    const setLogin = async (email, password) => {
        shared.setIsLoading(true);
        let typeAlert = "danger";
        state.email = email;
        state.password = password;

        const response = await login({
            email: state.email,
            password: state.password
        });

        if (response.success) {
            shared.setToken(response.authorisation.token);
            typeAlert = "success";
        }

        shared.setIsLoading(false);

        shared.setAlert(
            true,
            "Inicio de sesión",
            "cerrar",
            typeAlert,
            response.message
        );
        return response;
    };

    return {
        setLogin,
    };
});