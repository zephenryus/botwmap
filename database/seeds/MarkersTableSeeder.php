<?php

use Illuminate\Database\Seeder;

class MarkersTableSeeder extends Seeder {
    public function run () {
        factory(App\Marker::class)->create([
            'x' => 0,
            'z' => 0,
        ]);
        factory(App\Marker::class)->create([
            'x' => 10,
            'z' => 10,
        ]);
        factory(App\Marker::class)->create([
            'x' => -10,
            'z' => -10,
        ]);
        factory(App\Marker::class)->create([
            'x' => 1000,
            'z' => 1000,
        ]);
        factory(App\Marker::class)->create([
            'x' => -1000,
            'z' => -1000,
        ]);
        factory(App\Marker::class)->create([
            'x' => 6000,
            'z' => 5000,
        ]);
        factory(App\Marker::class)->create([
            'x' => -6000,
            'z' => 5000,
        ]);
        factory(App\Marker::class)->create([
            'x' => 6000,
            'z' => -5000,
        ]);
        factory(App\Marker::class)->create([
            'x' => -6000,
            'z' => -5000,
        ]);
        factory(App\Marker::class)->create([
            'x' => 8000,
            'z' => 8000,
        ]);
        factory(App\Marker::class)->create([
            'x' => -8000,
            'z' => 8000,
        ]);
        factory(App\Marker::class)->create([
            'x' => 8000,
            'z' => -8000,
        ]);
        factory(App\Marker::class)->create([
            'x' => -8000,
            'z' => -8000,
        ]);
        factory(App\Marker::class, 80)->create();
    }
}
