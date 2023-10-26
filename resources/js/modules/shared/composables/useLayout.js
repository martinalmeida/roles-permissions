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

    const selectedModule = (id) => {
        const module = modules.value.find((module) => module.id === id);
        subModules.value = module.subModules;
        shared.setSeletedModule(id);
    };

    const selectedSubModule = (id) => shared.setSeletedSubModule(id);

    const setSelectedSearch = (bool) => shared.setSearchModule(bool);

    // Hooks de montaje
    onMounted(async () => {
        shared.setIsLoading(true);
        await shared.setUser();
        await shared.setGetModules();
        modules.value = shared.getModules;
        name.value = shared.getUser.name;
        name.value = shared.getUser.name;
        email.value = shared.getUser.email;
        nit.value = shared.getUser.nit;
        shared.setIsLoading(false);
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
        modules,
        subModules,
        selectedModule,
        selectedSubModule,
        selectedSearch,
        setSelectedSearch,
    };
}
