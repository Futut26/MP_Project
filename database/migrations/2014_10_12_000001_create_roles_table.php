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
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->timestamps();
        });

        DB::table('roles')->insert([
            [

                'nama' => 'konsumen',
                'updated_at' => now(),
                'created_at' => now(),
            ],
            [
                'nama' => 'marketing',
                'updated_at' => now(),
                'created_at' => now(),
            ],
            [
                'nama' => 'staff',
                'updated_at' => now(),
                'created_at' => now(),
            ],
            [
                'nama' => 'pimpinan',
                'updated_at' => now(),
                'created_at' => now(),
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roles');
    }
};
