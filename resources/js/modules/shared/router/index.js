const route = [
    {
        path: '/:pathMatch(.*)*',
        component: () => import("@/modules/shared/views/404View.vue"),
    },
];

export default route;