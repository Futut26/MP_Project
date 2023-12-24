<?php

namespace App\Http\Controllers;

use App\Models\JenisPembiayaan;
use App\Models\JenisProperti;
use App\Models\KategoriProperti;
use App\Models\Kavling;
use App\Models\Pembiayaan;
use App\Models\Properti;
use App\Http\Requests\StorePropertiRequest;
use App\Http\Requests\UpdatePropertiRequest;
use App\Models\SpesifikasiProperti;
use App\Models\TipeUnit;
use Inertia\Inertia;

class PropertiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        // peroperti pagination
        $properti = Properti::paginate(10);

        $jenis_properti = JenisProperti::paginate(10);

        $kategori_properti = KategoriProperti::with('jenis_properti')->paginate(10);

        return Inertia::render('Admin/ManageProperty/Index', [
            'title' => 'Manage Property',
            'properti' => $properti,
            'jenis_properti' => $jenis_properti,
            'kategori_properti' => $kategori_properti,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePropertiRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($kd_properti)
    {

        $properti = Properti::where('kd_properti', $kd_properti)->with('kategori_properti')->first();
        $tipe_unit = TipeUnit::where('kd_properti', $kd_properti)->get();
        $tipe_unit->load(['spesifikasi_properti', 'kavling', 'galeri']);
        $pembiayaan = Pembiayaan::where('kd_properti', $kd_properti)->get();
        $pembiayaan->load('jenis_pembiayaan');
        $kategori_properti = KategoriProperti::all();
        $properti->tipe_unit = $tipe_unit;
        $properti->pembiayaan = $pembiayaan;

        $opsi_pembiayaan = JenisPembiayaan::whereNotIn('id', $pembiayaan->pluck('id_jenis_pembiayaan'))->get();
        return Inertia::render('Admin/ManageProperty/Show', [
            'title' => 'Manage' . ' ' . $properti->nama_properti . ' ' . 'Property',
            'properti' => $properti,
            'kategori_properti' => $kategori_properti,
            'opsi_pembiayaan' => $opsi_pembiayaan,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Properti $properti)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePropertiRequest $request, $slug)
    {
        $properti = Properti::where('slug', $slug)->first();

        if ($properti) {
            $validatedData = $request->validated();

            // Update hanya jika ada perubahan pada 'nama_properti'
            if ($properti->nama_properti !== $validatedData['nama_properti']) {
                $validatedData['slug'] = $validatedData['nama_properti'];
            }

            $properti->update($validatedData);

            return back()->with('message', 'Data properti berhasil diubah');
        } else {
            return back()->with('error', 'Properti tidak ditemukan');
        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Properti $properti)
    {
        //
    }
}
