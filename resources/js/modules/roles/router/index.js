const route = [
    {
        path: '/roles',
        name: "module-roles",
        component: () => import("@r/views/RolesView.vue"),
    },
];

export default route;
