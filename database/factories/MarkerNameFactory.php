<?php

use Faker\Generator as Faker;

$factory->define(App\MarkerName::class, function (Faker $faker) {
    return [
        'marker_name' => $faker->word,
    ];
});
