import { objectToFormData } from "@/helpers";
import { useSharedStore } from "@s/store/shared.js";

export async function coreApi(route, method, data = null) {
    const shared = useSharedStore();
    let response;

    if (data !== null) {
        const formData = objectToFormData(data);

        response = await fetch(`/api${route}`, {
            method: method,
            headers: {
                Authorization: `Bearer ${shared.getToken}`,
            },
            body: formData
        });
    } else {
        response = await fetch(`/api${route}`, {
            method: method,
            headers: {
                Authorization: `Bearer ${shared.getToken}`,
            }
        });
    }

    return response; // Retornar la respuesta de la solicitud Fetch
}
