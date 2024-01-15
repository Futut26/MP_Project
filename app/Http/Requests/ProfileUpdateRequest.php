<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'max:255'],
            'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id), 'regex:/^[a-zA-Z0-9_.+-]+@gmail\.com$/'],
        ];
    }

    public function messages(){
        return [
            'name.string' => 'Nama harus berupa Karakter',
            'name.max' => 'Nama maksimal 255 karakter',
            'email.email' => 'Email harus berupa email',
            'email.max' => 'Email maksimal 255 karakter',
            'email.unique' => 'Email sudah terdaftar',
            'email.regex' => 'Email harus menggunakan domain gmail.com',
        ];
    }

}
