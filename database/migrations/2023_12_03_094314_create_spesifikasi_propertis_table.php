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
        Schema::create('spesifikasi_properti', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kd_tipe');
            // atribut boleh tidak diisi
            $table->string('atribut')->nullable();
            $table->string('value')->nullable();
            $table->timestamps();
        });

        DB::table('spesifikasi_properti')->insert([
            [
                'kd_tipe' => 1,
                'atribut' => 'Luas Bangunan',
                'value' => '36 m2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'atribut' => 'Luas Tanah',
                'value' => '60 m2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'atribut' => 'Kamar Tidur',
                'value' => '2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'atribut' => 'Kamar Mandi',
                'value' => '3',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'atribut' => 'Carport',
                'value' => '1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'atribut' => 'Taman',
                'value' => '1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'atribut' => 'Lantai',
                'value' => '2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'atribut' => 'Listrik',
                'value' => '1300 Watt',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 1,
                'atribut' => 'Air',
                'value' => 'PDAM',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kd_tipe' => 2,
                'atribut' => 'Luas Bangunan',
                'value' => '36 m2',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        Schema::table('spesifikasi_properti', function (Blueprint $table) {
            $table->foreign('kd_tipe')->references('kd_tipe')->on('tipe_unit');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spesifikasi_propertis');
    }
};
