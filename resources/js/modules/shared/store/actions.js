import { defineStore } from "pinia";
import { useState } from "./state";

export const useActions = defineStore("shared.actions", () => {
    const state = useState();

    const setIsLoading = (isLoading) => {
        state.isLoading = isLoading;
    }

    return {
        setIsLoading,
    };
});