const route = [
    {
        path: 'crear',
        name: "companys-create",
        component: () => import("@c/views/CreateCompanysView.vue"),
    },
    {
        path: 'editar',
        name: "companys-edit",
        component: () => import("@c/views/EditCompanysView.vue"),
    }
];

export default route;