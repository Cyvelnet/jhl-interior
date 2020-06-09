const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./vue/index.vue'),
    },
    {
        path: '/profile',
        name: 'profile.index',
        component: () => import('./vue/profile.vue'),
    },
    // users
    {
        path: '/users',
        name: 'users.index',
        component: () => import('./vue/users/index.vue'),
        meta: {permission: 'users.read'}
    },
    {
        path: '/users/:id/edit',
        name: 'users.edit',
        component: () => import('./vue/users/edit.vue'),
        meta: {permission: 'users.update'}
    },
    {
        path: '/users/new',
        name: 'users.create',
        component: () => import('./vue/users/create.vue'),
        meta: {permission: 'users.create'}
    },

    // roles
    {
        path: '/roles',
        name: 'roles.index',
        component: () => import('./vue/roles/index.vue'),
        meta: {permission: 'roles.read'}
    },
    {
        path: '/roles/:id/edit',
        name: 'roles.edit',
        component: () => import('./vue/roles/edit.vue'),
        meta: {permission: 'roles.update'}
    },
    {
        path: '/roles/new',
        name: 'roles.create',
        component: () => import('./vue/roles/create.vue'),
        meta: {permission: 'roles.create'}
    },
    // projects
    {
        path: '/projects',
        name: 'projects.index',
        component: () => import('./vue/projects/index.vue'),
        meta: {permission: 'projects.read'}
    },
    {
        path: '/projects/new',
        name: 'projects.create',
        component: () => import('./vue/projects/create.vue'),
        meta: {permission: 'projects.create'}
    },
    {
        path: '/projects/:id',
        name: 'projects.show',
        component: () => import('./vue/projects/show.vue'),
        meta: {permission: 'projects.read'}
    },
    {
        path: '/projects/:id/edit',
        name: 'projects.edit',
        component: () => import('./vue/projects/edit.vue'),
        meta: {permission: 'projects.update'}
    },
    // project categories
    {
        path: '/project-categories',
        name: 'project-categories.index',
        component: () => import('./vue/project-categories/index.vue'),
        meta: {permission: 'categories.read'}
    },
    {
        path: '/project-categories/new',
        name: 'project-categories.create',
        component: () => import('./vue/project-categories/create.vue'),
        meta: {permission: 'categories.create'}
    },
    {
        path: '/project-categories/:id',
        name: 'project-categories.show',
        component: () => import('./vue/project-categories/show.vue'),
        meta: {permission: 'categories.read'}
    },
    {
        path: '/project-categories/:id/edit',
        name: 'project-categories.edit',
        component: () => import('./vue/project-categories/edit.vue'),
        meta: {permission: 'categories.update'}
    },
    // settings
    {
        path: '/settings',
        name: 'settings.index',
        component: () => import('./vue/settings/index'),
        meta: {permission: 'settings.update'}
    },
    {
        path: '/404',
        name: 'not_found',
        component: () => import('./vue/errors/404'),
    }

];

export {routes};
