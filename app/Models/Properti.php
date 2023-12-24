<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Properti extends Model
{
    use HasFactory;

    protected $table = 'properti';
    protected $primaryKey = 'kd_properti';
    protected $guarded = ["kd_properti"];

    public function kategori_properti()
    {
        return $this->belongsTo(KategoriProperti::class, 'id_kategori_properti');
    }

    public function pembiayaan()
    {
        return $this->hasMany(Pembiayaan::class, 'kd_properti', 'kd_properti');
    }

    public function tipe()
    {
        return $this->hasMany(TipeUnit::class, 'kd_properti', 'kd_properti');
    }
}
