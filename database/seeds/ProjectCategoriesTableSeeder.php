<?php

use Illuminate\Database\Seeder;

/**
 * Class ProjectCategoriesTableSeeder
 */
class ProjectCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $defaults = [
            [
                'name'        => 'Residential',
                'description' => null,
                'is_enabled'  => true,
            ],
            [
                'name'        => 'Commercial',
                'description' => null,
                'is_enabled'  => true,
            ],
            [
                'name'        => 'Hospitality',
                'description' => null,
                'is_enabled'  => true,
            ],
        ];

        foreach ($defaults as $default) {
            factory(\App\ProjectCategory::class)->create($default);
        }
/*
        if (app()->environment('local')) {
            factory(\App\ProjectCategory::class)->times(10)->create();
        }*/
    }
}
