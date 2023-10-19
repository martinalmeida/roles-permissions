import { defineStore } from "pinia";
import { useState } from "./state";

export const useActions = defineStore("shared.actions", () => {
    const state = useState();

    const setIsLoading = (isLoading) => {
        state.isLoading = isLoading;
    }

    const setAlert = (active, title, close, type, message) => {
        state.alert.active = active;
        state.alert.title = title;
        state.alert.close = close;
        state.alert.type = type;
        state.alert.message = message;
    }

    const closeAlert = () => {
        state.alert.active = false;
        state.alert.title = "";
        state.alert.close = "";
        state.alert.type = "";
        state.alert.message = "";
    }

    return {
        setIsLoading,
        setAlert,
        closeAlert,
    };
});