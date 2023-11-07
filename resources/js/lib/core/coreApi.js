import { objectToFormData } from "@/helpers";

export async function coreApi(route, method, data = null) {
    let response;

    if (data !== null) {
        const formData = objectToFormData(data);

        response = await fetch(route, {
            method: method,
            headers: {
                "x-csrf-token": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
            body: formData
        });
    } else {
        response = await fetch(route, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "x-csrf-token": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            }
        });
    }

    return response; // Retornar la respuesta de la solicitud Fetch
}
