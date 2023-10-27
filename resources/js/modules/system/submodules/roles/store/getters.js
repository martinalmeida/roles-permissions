import { defineStore } from "pinia";
import { computed } from "vue";
import { useState } from "./state";

export const useGetters = defineStore("roles.getters", () => {
    const state = useState();

    const getRoles = computed(() => state.getRoles);

    const getRol = computed(() => state.role);

    return {
        getRoles,
        getRol,
    };
});