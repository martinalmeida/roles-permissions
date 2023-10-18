const route = [
    {
        path: '/',
        name: "auth-login",
        component: () => import("@a/views/LoginView.vue"),
    },
];

export default route;
