import companys from '@c/router/';
import rolesRoutes from '@r/router/';
import usersRoutes from '@u/router/';

const route = [
    {
        path: '/empresas',
        name: "companys-submodule",
        component: () => import("@sy/layout/systemLayout.vue"),
        children: [
            {
                path: '',
                name: "companys-index",
                component: () => import("@sy/views/CompanysView.vue"),
            },
            ...companys
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
