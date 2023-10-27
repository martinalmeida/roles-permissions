import permissionsRoutes from '@p/router/';
import rolesRoutes from '@r/router/';
import usersRoutes from '@u/router/';

const route = [
    {
        path: '/permisos',
        name: "permissions-submodule",
        component: () => import("@sy/layout/systemLayout.vue"),
        children: [
            {
                path: '',
                name: "permissions-index",
                component: () => import("@sy/views/PermissionsView.vue"),
            },
            ...permissionsRoutes
        ]
    },
    {
        path: '/roles',
        name: "roles-submodule",
        component: () => import("@sy/layout/systemLayout.vue"),
        children: [
            {
                path: '',
                name: "roles-index",
                component: () => import("@sy/views/RolesView.vue"),
            },
            ...rolesRoutes
        ],
    },
    {
        path: '/usuarios',
        name: "users-submodule",
        component: () => import("@sy/layout/systemLayout.vue"),
        children: [
            {
                path: '',
                name: "users-index",
                component: () => import("@sy/views/UsersView.vue"),
            },
            ...usersRoutes
        ]
    },
];

export default route;
