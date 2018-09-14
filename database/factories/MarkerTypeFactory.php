<?php

use Faker\Generator as Faker;

$factory->define(App\MarkerType::class, function (Faker $faker) {
    $icons = [
        'images/icons/markers/cooking-pot.png',
        'images/icons/markers/default.png',
        'images/icons/markers/dlc-shrine.png',
        'images/icons/markers/enemy.png',
        'images/icons/markers/horse.png',
        'images/icons/markers/hyrule-castle.png',
        'images/icons/markers/korok-outline.png',
        'images/icons/markers/korok-seed.png',
        'images/icons/markers/lab.png',
        'images/icons/markers/leaf.png',
        'images/icons/markers/material.png',
        'images/icons/markers/memory.png',
        'images/icons/markers/motorcycle.png',
        'images/icons/markers/ore.png',
        'images/icons/markers/pin-1.png',
        'images/icons/markers/pin-2.png',
        'images/icons/markers/pin-3.png',
        'images/icons/markers/pin-4.png',
        'images/icons/markers/pin-5.png',
        'images/icons/markers/rupee.png',
        'images/icons/markers/shield.png',
        'images/icons/markers/shop-armor.png',
        'images/icons/markers/shop-dye.png',
        'images/icons/markers/shop-inn.png',
        'images/icons/markers/shop-item.png',
        'images/icons/markers/shop-jeweler.png',
        'images/icons/markers/shop-stable.png',
        'images/icons/markers/shrine-of-resurrection.png',
        'images/icons/markers/shrine.png',
        'images/icons/markers/side-quest.png',
        'images/icons/markers/star.png',
        'images/icons/markers/sword.png',
        'images/icons/markers/tower.png',
        'images/icons/markers/town.png',
        'images/icons/markers/trash.png',
        'images/icons/markers/treasure-chest.png',
        'images/icons/markers/vah-medoh.png',
        'images/icons/markers/vah-naboris.png',
        'images/icons/markers/vah-rudania.png',
        'images/icons/markers/vah-ruta.png'
    ];

    $name = $faker->word;
    return [
        'marker_type_name' => $name,
        'marker_type_slug' => $name,
        'icon' => $icons[~~rand(0, count($icons) - 1)],
        'marker_type_description' => $faker->sentence,
    ];
});
