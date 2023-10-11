import { defineStore } from "pinia";
import { useState } from "./state";
import { validated } from "@/modules/auth/services";

export const useActions = defineStore("auth.actions", () => {
    const state = useState();

    const setLogin = async (email, password) => {
        state.email = email;
        state.password = password;
        const response = await validated({
            email: state.email,
            password: state.password
        });
        return response;
    };

    return {
        setLogin,
    };
});