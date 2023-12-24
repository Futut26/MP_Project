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
        Schema::create('tipe_unit', function (Blueprint $table) {
            $table->id('kd_tipe');
            $table->foreignId('kd_properti');
            $table->string('nama_tipe');
            $table->integer('jumlah_unit');
            $table->string('harga');
            $table->timestamps();
        });

        DB::table('tipe_unit')->insert([
              [
                'kd_properti' => 1,
                'nama_tipe' => 'Standard',
                'jumlah_unit' => 17,
                'harga' => '160000000',
                'created_at' => now(),
                'updated_at' => now(),
              ],
              [
                'kd_properti' => 1,
                'nama_tipe' => 'Premium',
                'jumlah_unit' => 17,
                'harga' => '180000000',
                'created_at' => now(),
                'updated_at' => now(),
              ]
            ]);

        Schema::table('tipe_unit', function (Blueprint $table) {
            $table->foreign('kd_properti')->references('kd_properti')->on('properti');
        });


    }



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tipe_unit');
    }
};
