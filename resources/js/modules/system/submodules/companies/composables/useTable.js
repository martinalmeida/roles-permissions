import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useSharedStore } from "@s/store/shared.js";
import { useCompaniesStore } from "@c/store/companies.js";

export function useTable() {
    const router = useRouter();
    const shared = useSharedStore();
    const companies = useCompaniesStore();

    const items = ref([]);

    const closeModal = () => shared.closeModal(false);

    const createCompany = () => router.push({ name: "companys-create" });

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
        { text: "LOGO", value: "image", width: 200, sortable: true },
        { text: "ESTADO", value: "user_status.state", sortable: true },
    ];

    // Hooks de montaje
    onMounted(async () => {
        await companies.setGetCompanies();
        items.value = companies.getCompanies;
    });

    // Devolver las referencias reactivas como resultado del composable
    return { closeModal, createCompany, headers, items };
}
