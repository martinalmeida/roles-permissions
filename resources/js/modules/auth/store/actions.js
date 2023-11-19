import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useState } from "./state";
import { login } from "@a/services";
import { useSharedStore } from "@s/store/shared.js";

export const useActions = defineStore("auth.actions", () => {
    const router = useRouter();
    const state = useState();
    const shared = useSharedStore();

    const actionVars = {
        typeAlert: null,
        messageAlert: null,
    };

    const setLogin = async (email, password) => {
        shared.setIsLoading(true);
        actionVars.typeAlert = "danger";
        state.form.email = email;
        state.form.password = password;

        const data = {
            email: state.form.email,
            password: state.form.password,
        };

        const { result, status } = await login(data);
        actionVars.messageAlert = result.message;

        if (status === 200) {
            shared.setToken(result.authorization.token);
            actionVars.typeAlert = "success";
            router.push({ name: "home-module" });
        }

        shared.setIsLoading(false);
        shared.setAlert(
            true,
            "Inicio de sesión",
            "cerrar",
            actionVars.typeAlert,
            actionVars.messageAlert
        );
    };

    return {
        setLogin,
    };
});