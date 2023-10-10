export async function coreApi(route, method, data = null) {
    if (data !== null) {
        await fetch(route, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "x-csrf-token": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
            body: data
        });   
    } else {
        await fetch(route, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "x-csrf-token": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            }
        }); 
    }
}