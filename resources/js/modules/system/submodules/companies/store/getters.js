import { defineStore } from "pinia";
import { computed } from "vue";
import { useState } from "./state";

export const useGetters = defineStore("companies.getters", () => {
    const state = useState();

    const getCompanies = computed(() => state.getCompanies);

    return {
        getCompanies,
    };
});