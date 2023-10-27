import { coreApi } from "@/lib";

export async function getRoles() {
    try {
        const response = await coreApi(
            "/getRoles",
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