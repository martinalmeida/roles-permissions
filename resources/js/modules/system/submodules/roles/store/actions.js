import { defineStore } from "pinia";
import { useState } from "./state";
import { getRoles, createRole } from "@r/services";
import { useSharedStore } from "@s/store/shared.js";

export const useActions = defineStore("roles.actions", () => {
    const state = useState();

    const shared = useSharedStore();

    const setGetRoles = async () => {
        shared.setIsLoading(true);
        const response = await getRoles();
        state.getRoles = response.data;
        shared.setIsLoading(false);
    };

    const setCreateRol = async (name, description) => {
        shared.setIsLoading(true);
        state.name = name;
        state.description = description;
        const response = await createRole({
            name: state.name,
            description: state.description
        });
        shared.setIsLoading(false);
        shared.setAlert(
            true,
            "Aletar de rol",
            "cerrar",
            response.type,
            response.message
        );
        return response;
    };

    return {
        setGetRoles,
        setCreateRol,
    };
});