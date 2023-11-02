import { defineStore } from "pinia";
import { useState } from "./state";
import { getCompanies } from "@c/services";
import { useSharedStore } from "@s/store/shared.js";

export const useActions = defineStore("companies.actions", () => {
    const state = useState();

    const shared = useSharedStore();

    const setGetCompanies = async () => {
        shared.setIsLoading(true);
        const response = await getCompanies();
        state.getCompanies = response.data;
        shared.setIsLoading(false);
    };

    return {
        setGetCompanies,
    };
});