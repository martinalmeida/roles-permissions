const route = [
    {
        path: '/usuarios',
        name: "module-users",
        component: () => import("@u/views/UsersView.vue"),
    },
];

export default route;
