import { defineStore } from "pinia";
import { useState } from "./state";
import { validated } from "@a/services";
import { useSharedStore } from "@s/store/shared.js";

export const useActions = defineStore("companies.actions", () => {
    const state = useState();

    const shared = useSharedStore();

    const setLogin = async (email, password) => {
        shared.setIsLoading(true);
        state.email = email;
        state.password = password;
        const response = await validated({
            email: state.email,
            password: state.password
        });
        shared.setIsLoading(false);
        shared.setAlert(
            true,
            "Inicio de sesión",
            "cerrar",
            response.type,
            response.message
        );
        return response;
    };

    return {
        setLogin,
    };
});