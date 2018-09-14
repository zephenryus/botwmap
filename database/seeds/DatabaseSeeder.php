<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(MarkerTypesTableSeeder::class);
        $this->call(MarkersTableSeeder::class);
        // $this->call(MapRegionsSeeder::class);
        // $this->call(MarkerNamesTableSeeder::class);
    }
}
