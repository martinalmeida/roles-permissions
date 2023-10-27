import { createRouter, createWebHistory } from "vue-router";

import authRoutes from '@a/router/';
import homeRoutes from '@h/router/';
import systemRoutes from '@sy/router/';
import sharedRoutes from '@s/router/';

const routes = [
    ...authRoutes,
    ...homeRoutes,
    ...systemRoutes,
    ...sharedRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
