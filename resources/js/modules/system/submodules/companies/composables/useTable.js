import { defineAsyncComponent, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useSharedStore } from "@s/store/shared.js";
import { useRoleStore } from "@r/store/roles.js";

export function useTable() {
    const DataTable = defineAsyncComponent(
        () => import("@s/components/DataTable.vue")
    );

    const router = useRouter();
    const shared = useSharedStore();
    const roles = useRoleStore();

    const modal = ref(shared.getValuesModal.active);
    const items = ref([]);
    const item = ref({});

    const closeModal = () => shared.closeModal(false);

    const createRol = () => router.push({ name: "roles-create" });

    const headers = [
        { text: "ID", value: "id", width: 200, sortable: true },
        { text: "NOMBRE", value: "name", width: 200, sortable: true },
        { text: "DESCRIPCION", value: "description", width: 200, sortable: true },
        { text: "ESTADO", value: "status", width: 200, sortable: true },
    ];

    // Hooks de montaje
    onMounted(async () => {
        await roles.setGetRoles();
        items.value = roles.getRoles;
    });

    // Hooks de cambio
    watch(
        () => shared.getValuesModal.active,
        (newVal) => {
            modal.value = newVal;
        }
    );

    watch(
        () => shared.getDataTable.item,
        (newVal) => {
            item.value = newVal;
        }
    );

    // Devolver las referencias reactivas como resultado del composable
    return { DataTable, modal, closeModal, createRol, headers, items, item };
}
