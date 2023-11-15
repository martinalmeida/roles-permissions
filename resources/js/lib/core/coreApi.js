import { objectToFormData } from "@/helpers";
import { useSharedStore } from "@s/store/shared.js";

export async function coreApi(route, method, data = null, login = false) {
    const shared = useSharedStore();
    let response;

    if (data !== null) {
        const formData = objectToFormData(data);
        if (login) {
            response = await fetch(`/api${route}`, {
                method: method,
                body: formData
            });
            return response;
        }
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
