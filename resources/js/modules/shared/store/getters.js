import { defineStore } from "pinia";
import { computed } from "vue";
import { useState } from "./state";

export const useGetters = defineStore("shared.getters", () => {
    const state = useState();

    const getIsLoading = computed(() => state.isLoading);

    const getValuesAlert = computed(() => state.alert);

    const getValuesModalLogout = computed(() => state.modalLogout);

    const getValuesModal = computed(() => state.modal);

    const getUser = computed(() => state.user);

    const getModules = computed(() => state.modules);

    const getSearchModule = computed(() => state.searchModule);

    const getFile = computed(() => state.file);

    return {
        getIsLoading,
        getValuesAlert,
        getValuesModalLogout,
        getValuesModal,
        getUser,
        getModules,
        getSearchModule,
        getFile,
    };
});