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
        ];

        foreach ($defaultUsers as $user) {
            factory(\App\User::class)->create($user);
        }


        if (app()->environment('local')) {
            factory(\App\User::class)->times(20)->create();
        }
    }
}
