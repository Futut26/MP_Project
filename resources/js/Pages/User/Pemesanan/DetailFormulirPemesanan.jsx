import UserLayout from '@/Layouts/UserLayout';
import React from 'react'

export default function DetailFormulirPemesanan({ auth, title }) {
    return (
        <UserLayout auth={auth} title={title}>
            <div className="w-full py-10 space-y-5">
                <div className="flex flex-col text-primary text-xl font-semibold gap-2">
                    Pemesanan Properti {'->'} Formulir Pemesanan {'->'} Upload Dokumen
                    Persyaratan {'->'} Rincian Pemesanan
                    <p className=" font-light text-sm border-b-4 border-primary"></p>
                </div>
                <div className="border rounded-md p-3 w-full gap-2 flex flex-col bg-white">
                    <p className=" text-primary font-semibold">
                        {" "}
                        Informasi Properti:
                    </p>
                    <div className="flex flex-col gap-2 w-full rounded-md border p-3">
                        <p className="text-blue-600">Type: Standar</p>
                        <p className="text-blue-600">Harga: Allpenhill</p>
                        <p className="text-blue-600">
                            Nama Properti: Rp. 400.000.000.00
                        </p>
                        <div className="text-blue-600 flex flex-row gap-2 items-center">
                            Pilih Unit:{" "}
                            <span className="border px-3 py-2">A1</span>
                        </div>
                        <div className="text-blue-600 flex flex-row gap-2 items-center">
                            Pilih Pengajuan Pembiayaan:{" "}
                            <span className="border px-3 py-2">Case Keras</span>
                        </div>
                    </div>
                    <p className=" text-primary font-semibold">
                        {" "}
                        Biodata Pemesanan:
                    </p>
                    <div className="flex flex-col gap-3 w-full rounded-md border p-3">
                        <div className="w-full flex flex-col">
                            <p className="text-blue-600">
                                Nama Lengkap: Putut Budiutomo
                            </p>
                            <p className=" font-light text-sm border-b-2 border-blue-600"></p>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className="text-blue-600">
                                No Identitas KTP: 3674XXXXXXXX
                            </p>
                            <p className=" font-light text-sm border-b-2 border-blue-600"></p>
                        </div>
                        <p className="text-blue-600">Alamat:</p>
                        <div className="w-full flex flex-col gap-1 pl-14">
                            <p className="text-blue-600">RT/RW: 005/006</p>
                            <p className=" font-light text-sm border-b-2 border-blue-600"></p>
                            <p className="text-blue-600">Kel/Desa: Jombang</p>
                            <p className=" font-light text-sm border-b-2 border-blue-600"></p>
                            <p className="text-blue-600">Kecamatan: Ciputat</p>
                            <p className=" font-light text-sm border-b-2 border-blue-600"></p>
                            <p className="text-blue-600">
                                Kota: Tangerang Selatan
                            </p>
                            <p className=" font-light text-sm border-b-2 border-blue-600"></p>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className="text-blue-600">
                                No. Whatsapp: 6289XXXXXXXXX
                            </p>
                            <p className=" font-light text-sm border-b-2 border-blue-600"></p>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className="text-blue-600">
                                Pekerjaan: Wirausaha
                            </p>
                            <p className=" font-light text-sm border-b-2 border-blue-600"></p>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className="text-blue-600">
                                No. NPWP: 7889XXXXXXXXX
                            </p>
                            <p className=" font-light text-sm border-b-2 border-blue-600"></p>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className="text-blue-600">
                                Email: futut@gmail.com
                            </p>
                            <p className=" font-light text-sm border-b-2 border-blue-600"></p>
                        </div>
                    </div>
                </div>
                <div className="border rounded-md p-3 w-full gap-2 flex flex-col bg-white">
                    <p className=" text-primary font-semibold">
                        {" "}
                        Upload Dokumen Persyaratan:
                    </p>
                    <p className=" text-primary font-semibold">
                        {" "}
                        Kategori Pembiayaan :{" "}
                        <span className=" underline">Case Keras</span>
                    </p>
                    <div className=" overflow-x-auto">
                        <table className="table border-b ">
                            <thead>
                                <tr>
                                    <td className="text-lg text-primary font-semibold">
                                        No
                                    </td>
                                    <td className="text-lg text-primary font-semibold">
                                        Nama Dokumen
                                    </td>
                                    <td className="flex gap-2 items-center text-lg text-primary font-semibold">
                                        {/* icon unduh */}
                                        <i className="fas fa-download"></i>
                                        Upload Dokumen
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>KTP</td>
                                    <td>Menunggu Verfikasi</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>NPWP</td>
                                    <td>Menunggu Verfikasi</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Kartu Keluarga</td>
                                    <td>Menunggu Verfikasi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="border rounded-md p-3 w-full gap-2 flex flex-col bg-white">
                    <p className=" text-primary font-semibold">
                        {" "}
                        Biaya Booking: Rp. 2.000.000,00
                    </p>
                    <div className="flex flex-row items-center">
                        {/* icons info */}
                        <i className="fas fa-info-circle text-blue-400 px-4"></i>
                        <p className="text-blue-500">
                            Booking fee merupakan uang pemesanan unit yang
                            berfungsi sebagai tanda jadi untuk melakukan
                            pembelian unit properti, booking juga berfungsi
                            untuk mengkunci unit yang telah dipesan.
                        </p>
                    </div>
                    {/* buttob Booking bg-primary */}
                    <div className="flex justify-start">
                        <button className="btn btn-primary font-extrabold text-white">
                            Booking
                        </button>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
