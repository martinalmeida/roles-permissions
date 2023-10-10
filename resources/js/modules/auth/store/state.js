import { defineStore } from "pinia";

export const useState = defineStore("auth.state", {
    state: () => {
        return {
            email: "",
            password: "",
        }
    },
});