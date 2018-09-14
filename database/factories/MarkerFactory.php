<?php

use Faker\Generator as Faker;

$factory->define(App\Marker::class, function (Faker $faker) {
    return [
        'map_region_id' => function () {
            return factory(App\MapRegion::class)->create()->id;
        },
        'marker_type_id' => function () {
            return factory(App\MarkerType::class)->create()->id;
        },
        'marker_name' => $faker->word,
        'marker_description' => $faker->sentence,
        'x' => $faker->randomFloat(null, -8000, 8000),
        'y' => $faker->randomFloat(null, 0, 8000),
        'z' => $faker->randomFloat(null, -8000, 8000),
        'source' => $faker->word,
    ];
});
