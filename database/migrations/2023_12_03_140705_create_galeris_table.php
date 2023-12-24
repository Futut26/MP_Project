<?php

use App\Models\Galeri;
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
        Schema::create('galeri', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kd_tipe');
            $table->string('nama_galeri')->nullable();
            $table->string('nama_file')->nullable();
            $table->string('jenis_file');
            $table->timestamps();
        });

        // Call factory to create dummy data

        Galeri::factory(5)->create();

        //create relationship with tipe_properti
        Schema::table('galeri', function (Blueprint $table) {
            $table->foreign('kd_tipe')->references('kd_tipe')->on('tipe_unit')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('galeri');
    }
};
