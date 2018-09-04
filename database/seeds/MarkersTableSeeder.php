<?php

use Illuminate\Database\Seeder;

class MarkersTableSeeder extends Seeder {
    public function run () {
        factory(App\Marker::class, 100)->create();
    }
}
