import { defineStore } from "pinia";

export const useState = defineStore("users.state", {
    state: () => {
        return {
            email: "",
            password: "",
        }
    },
});