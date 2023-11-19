import { defineStore } from "pinia";
import { computed } from "vue";
import { useState } from "./state";

export const useGetters = defineStore("auth.getters", () => {
    const state = useState();

    const getForm = computed(() => state.form);

    return { getForm };
});