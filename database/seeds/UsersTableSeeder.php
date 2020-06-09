<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $defaultUsers = [
            [
                'name'  => 'JHL',
                'email' => 'admin@jhlmaju.com',
            ],
            [
                'name'  => 'JHL2',
                'email' => 'admin2@jhlmaju.com',
            ],
        ];

        foreach ($defaultUsers as $userData) {
            $user = factory(\App\User::class)->create($userData);
            $user->assignRole('Super Admin');
        }


        if (app()->environment('local')) {
            factory(\App\User::class)->times(20)->create();
        }
    }
}
