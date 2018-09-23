<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MarkerType extends Model {
    public function categories () {
        return $this->belongsToMany(MarkerCategory::class);
    }
}
