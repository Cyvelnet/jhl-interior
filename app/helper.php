<?php

if (!function_exists('get_permissions')) {
    /**
     * @param  \App\User  $user
     */
    function get_permissions(\App\User $user)
    {
        $permissions = [];

        // check if user is super admin
        if ($user->hasRole('Super Admin')) {
            $permissions = \Illuminate\Support\Arr::flatten(\Illuminate\Support\Arr::pluck(config('acl'),
                'permissions.*.name'));
        } else {

            $permissions = \Illuminate\Support\Arr::pluck($user->getAllPermissions(), 'name');

        }

        return \Illuminate\Support\Arr::flatten($permissions);


    }
}
