import { coreApi } from "@/lib";

export async function validated(data) {
    try {
        const response = await coreApi(
            "/validated",
            "POST",
            JSON.stringify(data)
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