import { defineAsyncComponent } from "vue";

export function useDataTable() {

    const BodyTable = defineAsyncComponent(
        () => import("@s/components/DataTable/Body.vue")
    );

    const HeaderTable = defineAsyncComponent(
        () => import("@s/components/DataTable/Header.vue")
    );

    const Table = defineAsyncComponent(
        () => import("@s/components/DataTable/Table.vue")
    );

    // Devolver las referencias reactivas como resultado del composable
    return { BodyTable, HeaderTable, Table };
}
