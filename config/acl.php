<?php

return [
    [
        'module'      => 'User',
        'permissions' => [
            [
                'label' => 'Read',
                'name'  => 'users.read',
            ],
            [
                'label' => 'Create',
                'name'  => 'users.create',
            ],
            [
                'label' => 'Update',
                'name'  => 'users.update',
            ],
            [
                'label' => 'Delete',
                'name'  => 'users.delete',
            ],
        ],
    ],
    [
        'module'      => 'Role',
        'permissions' => [
            [
                'label' => 'Read',
                'name'  => 'roles.read',
            ],
            [
                'label' => 'Create',
                'name'  => 'roles.create',
            ],
            [
                'label' => 'Update',
                'name'  => 'roles.update',
            ],
            [
                'label' => 'Delete',
                'name'  => 'roles.delete',
            ],
        ],
    ],
    [
        'module'      => 'Project',
        'permissions' => [
            [
                'label' => 'Read',
                'name'  => 'projects.read',
            ],
            [
                'label' => 'Create',
                'name'  => 'projects.create',
            ],
            [
                'label' => 'Update',
                'name'  => 'projects.update',
            ],
            [
                'label' => 'Delete',
                'name'  => 'projects.delete',
            ],
        ],
    ],
    [
        'module'      => 'Project Category',
        'permissions' => [
            [
                'label' => 'Read',
                'name'  => 'categories.read',
            ],
            [
                'label' => 'Create',
                'name'  => 'categories.create',
            ],
            [
                'label' => 'Update',
                'name'  => 'categories.update',
            ],
            [
                'label' => 'Delete',
                'name'  => 'categories.delete',
            ],
        ],
    ]/*,
    [
        'module'      => 'Setting',
        'permissions' => [
            [
                'label' => 'Update',
                'name'  => 'settings.update',
            ],
        ],
    ],*/
];
