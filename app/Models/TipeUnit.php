<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipeUnit extends Model
{
    use HasFactory;

    protected $table = 'tipe_unit';
    protected $guarded = ["kd_tipe"];

    public function properti()
    {
        return $this->belongsTo(Properti::class, 'kd_properti', 'kd_properti');
    }
    public function spesifikasi_properti()
    {
        return $this->hasMany(SpesifikasiProperti::class, 'kd_tipe', 'kd_tipe');
    }

    public function kavling()
    {
        return $this->hasMany(Kavling::class, 'kd_tipe', 'kd_tipe');
    }

    //galeri
    public function galeri()
    {
        return $this->hasMany(Galeri::class, 'kd_tipe', 'kd_tipe');
    }
}
