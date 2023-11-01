import { defineStore } from "pinia";

export const useState = defineStore("companies.state", {
    state: () => {
        return {
            email: "",
            password: "",
        }
    },
});