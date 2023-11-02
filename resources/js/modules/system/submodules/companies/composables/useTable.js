import { defineAsyncComponent, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useSharedStore } from "@s/store/shared.js";
import { useCompaniesStore } from "@c/store/companies.js";

export function useTable() {
    const DataTable = defineAsyncComponent(
        () => import("@s/components/DataTable.vue")
    );

    const router = useRouter();
    const shared = useSharedStore();
    const companies = useCompaniesStore();

    const modal = ref(shared.getValuesModal.active);
    const items = ref([]);
    const item = ref({});

    const closeModal = () => shared.closeModal(false);

    const createCompany = () => router.push({ name: "roles-create" });

    const headers = [
        { text: "NIT", value: "nit", sortable: true },
        { text: "DIGITO", value: "digito", sortable: true },
        { text: "NOMBRE", value: "nombre", width: 200, sortable: true },
        { text: "REPRESENTANTE", value: "representante", width: 200, sortable: true },
        { text: "TELEFONO", value: "telefono", sortable: true },
        { text: "DIRECCION", value: "direccion", sortable: true },
        { text: "EMAIL", value: "email", sortable: true },
        { text: "PAIS", value: "pais", sortable: true },
        { text: "CIUDAD", value: "ciudad", sortable: true },
        { text: "CONTACTO", value: "contacto", sortable: true },
        { text: "EMAIL TECNICO", value: "email_tec", sortable: true },
        { text: "EMAIL LOGISTICA", value: "email_logis", sortable: true },
        { text: "ESTADO", value: "status", sortable: true },
    ];

    // Hooks de montaje
    onMounted(async () => {
        await companies.setGetCompanies();
        items.value = companies.getCompanies;
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
    return { DataTable, modal, closeModal, createCompany, headers, items, item };
}
