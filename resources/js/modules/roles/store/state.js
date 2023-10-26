import { defineStore } from "pinia";

export const useState = defineStore("roles.state", {
    state: () => {
        return {
            getRoles: [
                {
                    id: 0,
                    name: "",
                    description: "",
                    status: "",
                },
            ],
            role: {
                id: 0,
                name: "",
                description: "",
                status: "",
            }
        }
    },
});