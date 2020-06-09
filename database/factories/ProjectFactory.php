<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Project;
use Faker\Generator as Faker;

$factory->define(Project::class, function (Faker $faker) {
    return [
        'name'                  => 'Project'.$faker->numberBetween(1000, 9990).'-'.$faker->numberBetween(1000, 9990),
        'is_published'          => $faker->boolean,
        'highlight'             => $faker->paragraphs(3, true),
        'description'           => $faker->paragraphs(6, true),
        'value'                 => $faker->randomNumber(4),
        'client_name'           => $faker->name,
        'client_website'        => $faker->url,
        'date'                  => $faker->date(),
        'location'              => $faker->city,
        'project_categories_id' => function () {
            return factory(\App\ProjectCategory::class)->create()->id;
        },
    ];
});
