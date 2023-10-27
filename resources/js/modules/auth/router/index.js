const route = [
    {
        path: '/',
        name: "auth-module",
        component: () => import("@a/views/LoginView.vue"),
    },
];

export default route;
