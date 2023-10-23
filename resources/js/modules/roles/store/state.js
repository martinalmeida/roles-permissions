import { defineStore } from "pinia";

export const useState = defineStore("roles.state", {
    state: () => {
        return {
            email: "",
            password: "",
        }
    },
});