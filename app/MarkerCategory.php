<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MarkerCategory extends Model {
    protected $fillable = [
        'marker_category_name'
    ];

    public function marker () {
        return $this->hasMany(Marker::class, 'marker_id');
    }

    public function markerTypes () {
        return $this->belongsToMany(MarkerType::class);
    }
}
