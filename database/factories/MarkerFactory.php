<?php

use Faker\Generator as Faker;

$factory->define(App\Marker::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'x' => $faker->randomFloat(),
        'y' => $faker->randomFloat(),
        'z' => $faker->randomFloat(),
        'source' => $faker->word,
    ];
});
