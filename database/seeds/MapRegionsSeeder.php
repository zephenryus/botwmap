<?php

use Illuminate\Database\Seeder;

class MapRegionsSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run () {
        $chars = 'abcdefghij';
        for ($alpha = 0; $alpha < 10; $alpha++) {
            $letter = strtoupper(substr($chars, $alpha, 1));
            for ($integer = 0; $integer < 8; $integer++) {
                $number = $integer + 1;
                DB::table('map_regions')->insert([
                    'region_name' => "{$letter}-{$number}",
                    'north_boundary' => ($integer - 4) * 1000,
                    'east_boundary' => ($alpha - 5) * 1000,
                    'south_boundary' => ($integer - 4) * 1000 + 1000,
                    'west_boundary' => ($alpha - 5) * 1000 + 1000,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ]);
            }
        }

    }
}
