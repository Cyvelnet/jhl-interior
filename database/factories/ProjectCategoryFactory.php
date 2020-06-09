<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ProjectCategory;
use Faker\Generator as Faker;

$factory->define(ProjectCategory::class, function (Faker $faker) {
    return [
        'name'        => 'Category '.$faker->numberBetween(1000, 9999).'-'.$faker->numberBetween(10000, 99999),
        'description' => $faker->paragraphs(3, true),
        'is_enabled'  => $faker->boolean,
    ];
});
