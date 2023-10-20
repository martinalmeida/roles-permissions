import { ref, onMounted, watch } from "vue";
import { useSharedStore } from "@s/store/shared.js";

export function useLayout() {
    const shared = useSharedStore();

    const name = ref(shared.getUser.name);
    const email = ref(shared.getUser.email);
    const nit = ref(shared.getUser.nit);
    const modal = ref(shared.getValuesModal.active);

    const openModal = () => shared.openModal();

    const closeModal = () => shared.closeModal();

    const getAllDataUser = async () => {
        const response = await shared.setUser();
        return response;
    };

    onMounted(async () => {
        await getAllDataUser();
        name.value = shared.getUser.name;
        name.value = shared.getUser.name;
        email.value = shared.getUser.email;
        nit.value = shared.getUser.nit;
    });

    watch(
        () => shared.getValuesModal.active,
        (newVal) => {
            modal.value = newVal;
        }
    );

    return { name, email, nit, modal, openModal, closeModal };
}
