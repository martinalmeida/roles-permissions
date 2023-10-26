import { ref } from "vue";
import { useSharedStore } from "@s/store/shared.js";

export function useDataTable(search) {
    const shared = useSharedStore();

    const searchField = ref(search);
    const searchValue = ref("");

    const showRow = (item) => {
        shared.openModal(false);
        shared.setDataTable(item);
    };

    // Devolver las referencias reactivas como resultado del composable
    return { searchField, searchValue, showRow };
}
