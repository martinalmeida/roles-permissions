import { defineStore } from "pinia";
import { extractStore } from "@/modules/shared/helpers/extractStore.js";
import { useState } from "./state";
import { useGetters } from "./getters";
import { useActions } from "./actions";

export const useAuthStore = defineStore("auth", () => ({
    ...extractStore(useState()),
    ...extractStore(useGetters()),
    ...extractStore(useActions()),
}));