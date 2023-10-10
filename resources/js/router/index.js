import { createRouter, createWebHistory } from "vue-router";

import authRoutes from '@/modules/auth/router/';
import homeRoutes from '@/modules/home/router/';
import sharedRoutes from '@/modules/shared/router/';

const routes = [
    ...authRoutes,
    ...homeRoutes,
    ...sharedRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
