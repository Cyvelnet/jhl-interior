<?php

use Illuminate\Database\Seeder;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (app()->environment('local')) {
            foreach (range(0, 11) as $key) {

                $category = \App\ProjectCategory::inRandomOrder()->first();

                factory(\App\Project::class)->create([
                    'project_categories_id' => $category->id, 'is_published' => true,
                ]);
            }
        }
    }
}
