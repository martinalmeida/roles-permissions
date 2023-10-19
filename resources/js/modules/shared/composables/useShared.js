import { ref, watch } from "vue";
import { useSharedStore } from "@s/store/shared.js";

export function useShared() {
    const shared = useSharedStore();

    const loading = ref(shared.getIsLoading);

    const valuesAlert = ref({
        active: shared.getValuesAlert.active,
        title: shared.getValuesAlert.title,
        close: shared.getValuesAlert.close,
        type: shared.getValuesAlert.type,
        message: shared.getValuesAlert.message,
    });

    const closeAlert = () => shared.closeAlert();

    watch(
        () => shared.getIsLoading,
        (newVal) => {
            loading.value = newVal;
        }
    );

    watch(
        () => shared.getValuesAlert.active,
        (newAlert) => {
            valuesAlert.value.active = newAlert;
            valuesAlert.value.title = shared.getValuesAlert.title;
            valuesAlert.value.close = shared.getValuesAlert.close;
            valuesAlert.value.type = shared.getValuesAlert.type;
            valuesAlert.value.message = shared.getValuesAlert.message;
        }
    );

    // Devolver las referencias reactivas como resultado del composable
    return { loading, valuesAlert, closeAlert };
}
