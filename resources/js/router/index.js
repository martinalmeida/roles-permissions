import { createRouter, createWebHistory } from "vue-router";

import authRoutes from '@a/router/';
import homeRoutes from '@h/router/';
import PermissionsRoutes from '@p/router/';
import RolesRoutes from '@r/router/';
import UsersRoutes from '@u/router/';
import sharedRoutes from '@s/router/';

const routes = [
    ...authRoutes,
    ...homeRoutes,
    ...PermissionsRoutes,
    ...RolesRoutes,
    ...UsersRoutes,
    ...sharedRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
