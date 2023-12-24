<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpesifikasiProperti extends Model
{
    use HasFactory;

    protected $table = 'spesifikasi_properti';
    protected $guarded = ["id"];

    public function tipe_unit()
    {
        return $this->belongsTo(TipeUnit::class, 'kd_tipe');
    }
}
