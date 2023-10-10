const route = [
    {
        path: '/',
        name: "auth-login",
        component: () => import("@/modules/auth/views/LoginView.vue"),
    },
];

export default route;
