<?php

use Faker\Generator as Faker;

$factory->define(App\MarkerType::class, function (Faker $faker) {
    $name = $faker->word;
    return [
        'marker_type_name' => $name,
        'marker_type_slug' => $name,
        'marker_type_description' => $faker->paragraph,
    ];
});
