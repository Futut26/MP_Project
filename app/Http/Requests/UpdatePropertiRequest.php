<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePropertiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        return [
                'nama_properti' => 'required|string|max:255',
                'slug' => 'required|string|max:255',
                'lokasi' => 'required|string|max:255',
                'url_maps' => 'required|string|max:255',
                'pinvalue_min' => 'required|string|max:255',
                'pinvalue_max' => 'required|string|max:255',
                'id_kategori_properti' => 'required',
        ];
    }

    public function messages(){
        return [

                'nama_properti.required' => 'Nama properti harus diisi',
                'nama_properti.string' => 'Nama properti harus berupa Karakter',
                'nama_properti.max' => 'Nama properti maksimal 255 karakter',
                'slug.required' => 'Slug harus diisi',
                'slug.string' => 'Slug harus berupa Karakter',
                'slug.max' => 'Slug maksimal 255 karakter',
                'lokasi.required' => 'Lokasi harus diisi',
                'lokasi.string' => 'Lokasi harus berupa Karakter',
                'lokasi.max' => 'Lokasi maksimal 255 karakter',
                'url_maps.required' => 'URL Maps harus diisi',
                'url_maps.string' => 'URL Maps harus berupa Karakter',
                'url_maps.max' => 'URL Maps maksimal 255 karakter',
                'pinvalue_min.required' => 'Pinvalue Min harus diisi',
                'pinvalue_min.string' => 'Pinvalue Min harus berupa Karakter',
                'pinvalue_min.max' => 'Pinvalue Min maksimal 255 karakter',
                'pinvalue_max.required' => 'Pinvalue Max harus diisi',
                'pinvalue_max.string' => 'Pinvalue Max harus berupa Karakter',
                'pinvalue_max.max' => 'Pinvalue Max maksimal 255 karakter',
                'id_kategori_properti.required' => 'Kategori Properti harus diisi',


        ];
    }
}
