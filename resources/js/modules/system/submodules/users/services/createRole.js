import { coreApi } from "@/lib";

export async function createRole(data) {
    try {
        const response = await coreApi(
            "/createRole",
            "POST",
            data
        );

        const result = await response.json();

        return result;

    } catch (error) {
        return {
            message: "Ocurrió un error interno en el servidor.",
            type: "danger",
            status: 500 // Código 500 Internal Server Error
        };
    }
};