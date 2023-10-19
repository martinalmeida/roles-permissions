import { defineStore } from "pinia";
import { computed } from "vue";
import { useState } from "./state";

export const useGetters = defineStore("shared.getters", () => {
    const state = useState();

    const getIsLoading = computed(() => state.isLoading);

    const getValuesAlert = computed(() => state.alert);

    return {
        getIsLoading,
        getValuesAlert,
    };
});