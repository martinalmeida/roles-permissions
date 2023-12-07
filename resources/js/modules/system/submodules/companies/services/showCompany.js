import { coreApi } from "@/lib";

export async function showCompany() {
    try {
        const response = await coreApi(
            "/showCompany?search=empresaA@example.com&page=1",
            "GET",
        );

        const result = await response.json();

        return result;

    } catch (error) {
        return {
            message: "Ocurrió un error interno en el servidor.",
            status: 500 // Código 500 Internal Server Error
        };
    }
};