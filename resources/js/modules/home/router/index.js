const route = [
    {
        path: '/inicio',
        name: "module-home",
        component: () => import("@h/views/HomeView.vue"),
    },
];

export default route;
