import { ref, watch } from "vue";
import { useSharedStore } from "@s/store/shared.js";

export function useShared() {
    const shared = useSharedStore();
    const loading = ref(shared.getIsLoading);

    // Escuchar cambios en shared.getIsLoading y actualizar loading de manera asíncrona
    watch(() => shared.getIsLoading, (newVal) => {
        loading.value = newVal;
    }, { flush: 'post' });

    // Devolver las referencias reactivas como resultado del composable
    return { loading };
}
