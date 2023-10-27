const route = [
    {
        path: 'crear',
        name: "users-create",
        component: () => import("@u/views/CreateUsersView.vue"),
    },
    {
        path: 'editar',
        name: "users-edit",
        component: () => import("@u/views/EditUsersView.vue"),
    }
];

export default route;