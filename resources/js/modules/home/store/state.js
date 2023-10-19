import { defineStore } from "pinia";

export const useState = defineStore("home.state", {
    state: () => {
        return {
            email: "",
            password: "",
        }
    },
});