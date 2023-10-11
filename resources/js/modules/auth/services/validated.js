import { coreApi } from "@/lib";

export async function validated(data) {
    try {
        const response = await coreApi("/validated", "POST", JSON.stringify(data));

        const result = await response.json();

        return {
            message: "Credenciales correctas.",
            status: result.status
        };
    } catch (error) {
        return {
            message: "Las credenciales que ingresaste no son correctas, vuelve a intentarlo.",
            status: 400,
        };
    }
};