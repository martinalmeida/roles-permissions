import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCompaniesStore } from "@c/store/companies.js";

export function useTable() {
    const router = useRouter();
    const company = useCompaniesStore();

    const items = ref({
        titles: [
            "nit", "digito", "nombre", "representante", "telefono", "direccion",
            "email", "pais", "ciudad", "contacto", "email_tec", "email_logis",
            "image", "status", "actions"
        ],
        data: [],
    });

    const createCompany = () => router.push({ name: "companys-create" });

    // Hooks de montaje
    onMounted(async () => {
        // await company.setGetCompanies();
        // items.value = company.getCompanies;
    });

    // Devolver las referencias reactivas como resultado del composable
    return { createCompany, items };
}
