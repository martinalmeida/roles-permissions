import { coreApi } from "@/lib";

export async function validated(data) {
    try {
        // Realizar una solicitud HTTP para actualizar el rol del usuario
        const response = await coreApi("/validated", "POST", JSON.stringify(data));

        const result = await response.json();

        return { data: result.data, status: result.status };
    } catch (error) {
        return {
            data: "Error al ingresar las credenciales.",
            status: 400,
        };
    }
};