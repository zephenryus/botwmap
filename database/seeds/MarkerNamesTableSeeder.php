<?php

use Illuminate\Database\Seeder;

class MarkerNamesTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run () {
        $handle = fopen("database/seeds/unique_names.txt", "r");

        if ($handle) {
            while (($line = fgets($handle)) !== false) {
                DB::table('marker_names')->insert([
                    'marker_name' => trim($line)
                ]);
            }

            fclose($handle);
        }
    }
}
