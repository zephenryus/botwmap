<?php

use Faker\Generator as Faker;

$factory->define(App\MapRegion::class, function (Faker $faker) {
    return [
        'region_name' => $faker->word,
        'north_boundary' => $faker->randomFloat(6, -5000, 5000),
        'east_boundary' => $faker->randomFloat(6, -5000, 5000),
        'south_boundary' => $faker->randomFloat(6, -5000, 5000),
        'west_boundary' => $faker->randomFloat(6, -5000, 5000),
    ];
});
