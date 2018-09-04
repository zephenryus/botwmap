<?php

use Illuminate\Database\Seeder;

class MarkerTypesTableSeeder extends Seeder {
    public function run () {
        DB::table('marker_types')->insert([
            'marker_type_name' => 'default',
            'marker_type_slug' => 'default',
            'marker_type_description' => '',
        ]);
    }
}
