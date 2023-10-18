import { defineStore } from "pinia";
import { computed } from "vue";
import { useState } from "./state";

export const useGetters = defineStore("shared.getters", () => {
    const state = useState();

    const getEmail = computed(() => state.email);

    const getPassword = computed(() => state.password);

    return {
        getEmail,
        getPassword,
    };
});