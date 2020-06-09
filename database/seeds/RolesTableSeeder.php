<?php

use Illuminate\Database\Seeder;

/**
 * Class RolesTableSeeder
 */
class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $defaultRoles = [
            [
                'name'       => 'Super Admin',
                'is_super'   => true,
                'can_delete' => false,
                'can_edit'   => false,
                'guard_name' => 'api',
            ],
        ];

        foreach ($defaultRoles as $roleData) {
            $role = \Spatie\Permission\Models\Role::forceCreate($roleData);

        }

    }
}
