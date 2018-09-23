<?php

use Illuminate\Database\Seeder;

class MapRegionsSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run () {
        DB::table('map_regions')->insert([
            'region_name' => "Out of Bounds",
            'north_boundary' => -8000,
            'east_boundary' => -8000,
            'south_boundary' => 8000,
            'west_boundary' => 8000,
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s"),
        ]);

        $chars = 'zabcdefghijk';
        for ($alpha = 0; $alpha < 12; $alpha++) {
            $letter = strtoupper(substr($chars, $alpha, 1));
            for ($integer = 0; $integer < 10; $integer++) {
                DB::table('map_regions')->insert([
                    'region_name' => "{$letter}-{$integer}",
                    'north_boundary' => ($integer - 5) * 1000,
                    'east_boundary' => ($alpha - 6) * 1000,
                    'south_boundary' => ($integer - 5) * 1000 + 1000,
                    'west_boundary' => ($alpha - 6) * 1000 + 1000,
                    'created_at' => date("Y-m-d H:i:s"),
                    'updated_at' => date("Y-m-d H:i:s"),
                ]);
            }
        }

    }
}
