import { defineStore } from "pinia";

export const useState = defineStore("shared.state", {
    state: () => {
        return {
            email: "",
            password: "",
        }
    },
});