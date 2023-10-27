const route = [
    {
        path: '/inicio',
        name: "home-module",
        component: () => import("@h/views/HomeView.vue"),
    },
];

export default route;
