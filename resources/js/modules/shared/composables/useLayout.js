import { ref, onMounted, watch } from "vue";
import { useSharedStore } from "@s/store/shared.js";

export function useLayout() {
    const shared = useSharedStore();

    // Variables reactivas
    const name = ref(shared.getUser.name);
    const email = ref(shared.getUser.email);
    const nit = ref(shared.getUser.nit);
    const modal = ref(shared.getValuesModalLogout.active);
    const modules = ref(shared.getModules);
    const subModules = ref([]);
    const selectedSearch = ref(shared.getSearchModule);

    const openModal = () => shared.openModal();

    const closeModal = () => shared.closeModal();

    const logout = async () => {
        shared.setIsLoading(true);
        shared.closeModal();
        await shared.setLogout();
        shared.setIsLoading(false);
    };

    const selectedModule = (id) => {
        const module = modules.value.find((module) => module.id === id);
        subModules.value = module.subModules;
        shared.setSeletedModule(id);
    };

    const selectedSubModule = (id) => shared.setSeletedSubModule(id);

    const setSelectedSearch = (bool) => shared.setSearchModule(bool);

    // Hooks de montaje
    onMounted(async () => {
        if (shared.getToken === "") {
            shared.setToken(localStorage.getItem("token.jwt"));
        }
        if (modules.value[0].id === 0) {
            shared.setIsLoading(true);
            await shared.setUser();
            await shared.setGetModules();
            modules.value = await shared.getModules;
            name.value = await shared.getUser.name;
            name.value = await shared.getUser.name;
            email.value = await shared.getUser.email;
            nit.value = await shared.getUser.nit;
            shared.setIsLoading(false);
        } else {
            shared.setIsLoading(true);
            modules.value = await shared.getModules;
            name.value = await shared.getUser.name;
            name.value = await shared.getUser.name;
            email.value = await shared.getUser.email;
            nit.value = await shared.getUser.nit;
            shared.setIsLoading(false);
        }
    });

    // Hooks de cambio
    watch(
        () => shared.getValuesModalLogout.active,
        (newVal) => {
            modal.value = newVal;
        }
    );

    watch(
        () => shared.getSearchModule,
        (newVal) => {
            selectedSearch.value = newVal;
        }
    );

    return {
        name,
        email,
        nit,
        modal,
        openModal,
        closeModal,
        logout,
        modules,
        subModules,
        selectedModule,
        selectedSubModule,
        selectedSearch,
        setSelectedSearch,
    };
}
