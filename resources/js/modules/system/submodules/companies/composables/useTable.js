import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCompaniesStore } from "@c/store/companies.js";

export function useTable() {
    const router = useRouter();
    const company = useCompaniesStore();

    const items = ref({
        titles: [
            "id", "nit", "digito", "nombre", "representante", "telefono", "direccion",
            "email", "pais", "ciudad", "contacto", "email_tec", "email_logis",
            "image", "status"
        ],
        data: [
            {
                "id": 1,
                "nit": 1234754,
                "digito": 1,
                "nombre": "Empresa A",
                "representante": "Representante A",
                "telefono": 1234567890,
                "direccion": "Dirección A",
                "email": "empresaA@example.com",
                "pais": "COLOMBIA",
                "ciudad": "Ciudad A",
                "contacto": 9876543210,
                "email_tec": "tecnicoA@example.com",
                "email_logis": "logisticaA@example.com",
                "image": null,
                "status": 1,
                "created_at": "2023-11-27T16:44:43.000000Z",
                "updated_at": "2023-11-27T16:44:43.000000Z",
                "user_status": {
                    "id_state": 1,
                    "state": "Activo"
                }
            }
        ],
        actions: {
            edit: true,
            state: true,
            delete: true
        },
    });

    const createCompany = () => router.push({ name: "companys-create" });

    // Hooks de montaje
    onMounted(async () => {
        await company.setShowCompanies();
        items.value.data = await company.getCompanies;
    });

    // Devolver las referencias reactivas como resultado del composable
    return { createCompany, items };
}
