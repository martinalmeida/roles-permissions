import { defineStore } from "pinia";

export const useState = defineStore("auth.state", {
    state: () => {
        return {
            form: {
                email: "",
                password: "",
            },
        }
    },
});