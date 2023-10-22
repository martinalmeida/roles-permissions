import { defineStore } from "pinia";
import { computed } from "vue";
import { useState } from "./state";

export const useGetters = defineStore("shared.getters", () => {
    const state = useState();

    const getIsLoading = computed(() => state.isLoading);

    const getValuesAlert = computed(() => state.alert);

    const getValuesModal = computed(() => state.modal);

    const getUser = computed(() => state.user);

    const getModules = computed(() => state.modules);

    const getSearchModule = computed(() => state.searchModule);

    return {
        getIsLoading,
        getValuesAlert,
        getValuesModal,
        getUser,
        getModules,
        getSearchModule,
    };
});