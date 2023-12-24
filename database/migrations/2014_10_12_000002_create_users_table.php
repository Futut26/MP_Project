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
        Schema::create('users', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('status')->default('aktif');
            $table->foreignId('role_id');
            $table->rememberToken();
            $table->timestamps();
        });
        DB::table('users')->insert([
            [
                'name' => 'konsumen',
                'email' => 'konsumen@gmail.com',
                'password' => bcrypt('password'),
                'status' => 'aktif',
                'role_id' => 1,
                'updated_at' => now(),
                'created_at' => now(),
            ],
            [
                'name' => 'marketing',
                'email' => 'marketing@gmail.com',
                'password' => bcrypt('password'),
                'status' => 'aktif',
                'role_id' => 2,
                'updated_at' => now(),
                'created_at' => now(),
            ],
            [
                'name' => 'staff',
                'email' => 'staff@gmail.com',
                'password' => bcrypt('password'),
                'status' => 'aktif',
                'role_id' => 3,
                'updated_at' => now(),
                'created_at' => now(),
            ],
            [
                'name' => 'pimpinan',
                'email' => 'pimpinan@gmail.com',
                'password' => bcrypt('password'),
                'status' => 'aktif',
                'role_id' => 4,
                'updated_at' => now(),
                'created_at' => now(),
            ]


    ]);
    //create relationship with tabble roles
    Schema::table('users', function (Blueprint $table) {
        $table->foreign('role_id')->references('id')->on('roles');
    });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
