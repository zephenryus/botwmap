<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Marker extends Model {
    public function mapRegion () {
        return $this->belongsTo(MapRegion::class, 'map_region_id');
    }

    public function type () {
        return $this->belongsTo(MarkerType::class, 'marker_type_id');
    }

    public function categories () {
        return $this->hasMany(MarkerCategory::class, 'id');
    }
}
