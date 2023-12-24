<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('properti', function (Blueprint $table) {
            $table->id('kd_properti');
            $table->foreignId('id_kategori_properti')->constrained('kategori_properti');
            $table->string('nama_properti');
            $table->string('slug')->unique();
            $table->string('logo');
            $table->string('thumbnail');
            $table->string('lokasi');
            $table->string('url_maps');
            $table->string('pinvalue_min');
            $table->string('pinvalue_max');
            $table->timestamps();
        });

        // create  table properti related to table pembiyaan


        DB::table('properti')->insert([
            [
                'id_kategori_properti' => 1,
                'nama_properti' => 'Stellar Jardin Residence',
                'slug' => 'stellar-jardin-residence',
                'logo' => 'stellar_logo.png', 
                'thumbnail' => 'stellar_properti.png',
                'Lokasi' => 'Cikunir, Bekasi Selatan, Bekasi',
                'url_maps' => 'https://www.google.com/maps/place/Stellar+Jardin+Residence/@-6.2711215,106.9607851,15z/data=!4m6!3m5!1s0x2e698d8a08e6f8f3:0x8204b2f552823a5a!8m2!3d-6.2711215!4d106.9607851!16s%2Fg%2F11tsrw22x9?entry=ttu',
                'pinvalue_min' => '1600000000',
                'pinvalue_max' => '1800000000',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properti');
    }
};
