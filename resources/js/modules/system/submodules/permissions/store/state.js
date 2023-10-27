import { defineStore } from "pinia";

export const useState = defineStore("permissions.state", {
    state: () => {
        return {
            email: "",
            password: "",
        }
    },
});