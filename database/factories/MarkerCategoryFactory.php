<?php

use Faker\Generator as Faker;

$factory->define(App\MarkerCategory::class, function (Faker $faker) {
    return [
        'marker_category_name' => $faker->word,
    ];
});
