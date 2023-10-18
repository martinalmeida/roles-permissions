import { defineStore } from "pinia";
import { extractStore } from "@s/helpers/extractStore.js";
import { useState } from "./state";
import { useGetters } from "./getters";
import { useActions } from "./actions";

export const useAuthStore = defineStore("shared", () => ({
    ...extractStore(useState()),
    ...extractStore(useGetters()),
    ...extractStore(useActions()),
}));