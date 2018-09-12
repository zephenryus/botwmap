<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MarkerCategory extends Model {
    public function marker () {
        return $this->belongsTo(Marker::class, 'marker_id');
    }
}
