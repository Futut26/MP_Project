<?php

namespace Tests\Feature\Auth;

use App\Models\Role;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function test_halaman_login_dapat_ditampilkan(): void
    {
        $response = $this->get('/login');
        $response->assertStatus(200);
    }

  public function test_pengguna_dapat_mengautentikasi_menggunakan_halaman_login(): void
    {
        $role = Role::factory()->create([
            'nama' => 'konsumen',
        ]);
        $user = User::factory()->create();

        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => 'password',
            'role_id' => $role->id,
        ]);

        $this->assertAuthenticated();
        if ($user->hasVerifiedEmail()) {
            $response->assertRedirect(RouteServiceProvider::USER);
        } else {
            $response->assertRedirect(RouteServiceProvider::VerifyEmail);
        }
    }

    public function test_pengguna_tidak_dapat_mengautentikasi_dengan_password_invalid(): void
    {
        $role = Role::factory()->create([
            'nama' => 'konsumen',
        ]);
        $user = User::factory()->create();

        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => 'password-salah',
            'role_id' => $role->id,
        ]);

        $this->assertGuest();
    }

    public function test_pengguna_dapat_logout(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/logout');

        $this->assertGuest();
        $response->assertRedirect('/');
    }
}
