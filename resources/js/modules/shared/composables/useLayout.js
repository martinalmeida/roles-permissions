import { ref, onMounted, watch } from "vue";
import { useSharedStore } from "@s/store/shared.js";

export function useLayout() {
    const shared = useSharedStore();

    const name = ref(shared.getName);

    const modal = ref(shared.getValuesModal.active);

    const openModal = () => shared.openModal();

    const closeModal = () => shared.closeModal();

    const getAllDataUser = async () => {
        const response = await shared.setUser();
        return response;
    };

    onMounted(async () => {
        await getAllDataUser();
        name.value = shared.getName;
    });

    watch(
        () => shared.getValuesModal.active,
        (newVal) => {
            modal.value = newVal;
        }
    );

    return { name, modal, openModal, closeModal };
}
