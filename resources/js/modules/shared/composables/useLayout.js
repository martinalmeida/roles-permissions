import { ref, onBeforeMount, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useSharedStore } from "@s/store/shared.js";

export function useLayout() {
    const router = useRouter();
    const shared = useSharedStore();

    // Variables reactivas
    const name = ref(shared.getUser.name);
    const email = ref(shared.getUser.email);
    const company_id = ref(shared.getUser.company_id);
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
    onBeforeMount(() => {
        const token = localStorage.getItem("tokenJWT");
        if (token === 'null') {
            router.push({ name: "auth-module" });
        } else if (shared.getToken === "") {
            shared.setToken(localStorage.getItem("tokenJWT"));
        }
    });

    onMounted(async () => {
        if (modules.value[0].id === 0) {
            shared.setIsLoading(true);
            await shared.setUser();
            await shared.setGetModules();
            modules.value = await shared.getModules;
            name.value = await shared.getUser.name;
            name.value = await shared.getUser.name;
            email.value = await shared.getUser.email;
            company_id.value = await shared.getUser.company_id;
            shared.setIsLoading(false);
        } else {
            shared.setIsLoading(true);
            modules.value = await shared.getModules;
            name.value = await shared.getUser.name;
            name.value = await shared.getUser.name;
            email.value = await shared.getUser.email;
            company_id.value = await shared.getUser.company_id;
            shared.setIsLoading(false);
        }
    });

    // Hooks de cambio
    watch(
        [() => shared.getValuesModalLogout.active, () => shared.getSearchModule],
        ([modalVal, searchVal]) => {
            // Lógica común para ambos watchers
            modal.value = modalVal;
            selectedSearch.value = searchVal;
        }
    );

    return {
        name,
        email,
        company_id,
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
