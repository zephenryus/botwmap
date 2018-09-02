<?php

use Faker\Generator as Faker;

$factory->define(App\MapRegion::class, function (Faker $faker) {
    return [
        'region_name' => $faker->word,
    ];
});
