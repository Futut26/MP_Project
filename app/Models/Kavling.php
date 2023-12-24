<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kavling extends Model
{
    use HasFactory;

    protected $table = 'kavling';
    protected $guarded = ["kd_kavling"];

    public function tipe_unit()
    {
        return $this->belongsTo(TipeUnit::class, 'kd_tipe');
    }
}
