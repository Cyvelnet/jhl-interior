<?php

use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $acls = config('acl');

        foreach ($acls as $acl) {


            foreach ($acl['permissions'] as $permission) {

                \Spatie\Permission\Models\Permission::create([
                    'name'  => $permission['name'],
                    'guard_name' => 'api',
                ]);

            }

        }

    }
}
