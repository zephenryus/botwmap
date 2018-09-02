<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Marker extends Model {
    public function mapRegion () {
        return $this->belongsTo(MapRegion::class);
    }

    public function type () {
        return $this->belongsTo(MarkerType::class, 'marker_type_id');
    }

    public function category () {
        return $this->belongsTo(MarkerCategory::class, 'marker_category_id');
    }

    public function subCategory () {
        return $this->belongsTo(MarkerCategory::class, 'marker_sub_category_id');
    }
}
