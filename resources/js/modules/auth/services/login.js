import { coreApi } from "@/lib";

export async function login(data) {
    try {
        const response = await coreApi(
            "/login",
            "POST",
            data,
            true
        );

        const result = await response.json();
        const status = response.status;

        return { result, status };

    } catch (error) {
        return {
            message: "Ocurrió un error interno en el servidor.",
            status: 500 // Código 500 Internal Server Error
        };
    }
};