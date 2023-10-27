const route = [
    {
        path: 'crear',
        name: "permissions-create",
        component: () => import("@p/views/CreatePermissionsView.vue"),
    },
    {
        path: 'editar',
        name: "permissions-edit",
        component: () => import("@p/views/EditPermissionsView.vue"),
    }
];

export default route;