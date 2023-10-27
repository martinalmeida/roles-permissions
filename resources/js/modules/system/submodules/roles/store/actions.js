import { defineStore } from "pinia";
import { useState } from "./state";
import { getRoles } from "@r/services";
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

    return {
        setGetRoles,
    };
});