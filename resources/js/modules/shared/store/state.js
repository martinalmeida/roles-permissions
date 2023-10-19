import { defineStore } from "pinia";

export const useState = defineStore("shared.state", {
    state: () => {
        return {
            isLoading: false,
            alert: {
                active: false,
                title: "",
                close: "",
                type: "",
                message: "",
            },
        }
    },
});