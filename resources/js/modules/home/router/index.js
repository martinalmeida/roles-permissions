const route = [
    {
        path: '/inicio',
        name: "module-home",
        component: () => import("@/modules/home/views/HomeView.vue"),
    },
];

export default route;
