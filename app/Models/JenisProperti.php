<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisProperti extends Model
{
    use HasFactory;
    // name table jenis_properti
    protected $table = 'jenis_properti';
    protected $guarded = ["id"];


    public function kategori_properti()
    {
        return $this->hasMany(KategoriProperti::class, 'id_jenis_properti');
    }
}
