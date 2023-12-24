<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategoriProperti extends Model
{
    use HasFactory;
    protected $table = 'kategori_properti';

    protected $guarded = ["id"];

    public function jenis_properti()
    {
        return $this->belongsTo(JenisProperti::class, 'id_jenis_properti');
    }

    public function properti()
    {
        return $this->hasMany(Properti::class, 'id_kategori_properti');
    }
}
