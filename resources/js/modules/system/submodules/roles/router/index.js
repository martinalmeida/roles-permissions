const route = [
    {
        path: 'crear',
        name: "roles-create",
        component: () => import("@r/views/CreateRolView.vue"),
    },
    {
        path: 'editar',
        name: "roles-edit",
        component: () => import("@r/views/EditRolView.vue"),
    }
];

export default route;
