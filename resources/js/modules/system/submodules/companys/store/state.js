import { defineStore } from "pinia";

export const useState = defineStore("companys.state", {
    state: () => {
        return {
            email: "",
            password: "",
        }
    },
});