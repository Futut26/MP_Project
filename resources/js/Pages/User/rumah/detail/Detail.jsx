import UserLayout from "@/Layouts/UserLayout";
import { Link } from "@inertiajs/react";
import React from "react";
const dataRumahBaru = {
    id: 1,
    logo: "/assets/img/properti/stellar_logo.png",
    img: "/assets/img/properti/stellar_properti.png",
    price: "Rp. 1,6 - 1,7 Miliar",
    title: " Stellar Jardin Residence",
    location: "Cikunir, Bekasi",
    luas_bangunan: "Luas Bangunan : 81 m2",
    luas_tanah: "Luas Tanah : 82 m2",
};

export default function detail({ auth, title,id }) {
    const handleChangeExlisive = () => {
        console.log("exlisive");
    };
    return (
        <UserLayout auth={auth} title={title}>
            {/* image */}
            <div className="flex flex-col w-full gap-5">
                <div className="w-full flex justify-between flex-row gap-3 pt-5">
                    <div className=" w-[50%] ">
                        <img
                            className="rounded-md w-full h-full"
                            src="/assets/img/properti/stellar_properti.png"
                            alt=""
                        />
                    </div>
                    <div className="w-[50%] grid grid-cols-2 gap-4 pb-10 h-full">
                        <img
                            className="rounded-md object-contain w-full"
                            src="/assets/img/properti/stellar_properti.png"
                            alt=""
                        />{" "}
                        <img
                            className="rounded-md object-contain w-full"
                            src="/assets/img/properti/stellar_properti.png"
                            alt=""
                        />{" "}
                        <img
                            className="rounded-md object-contain w-full"
                            src="/assets/img/properti/stellar_properti.png"
                            alt=""
                        />{" "}
                        <img
                            className="rounded-md object-contain w-full"
                            src="/assets/img/properti/stellar_properti.png"
                            alt=""
                        />
                    </div>
                </div>
                {/* type */}
                <div class="flex flex-row gap-2 mb-5">
                    <div class="w-4/5 flex flex-col gap-5">
                        <div className="bg-white border w-full rounded-md shadow-md p-5 flex flex-col gap-3">
                            {/* head */}
                            <div className="w-full flex flex-row justify-between ">
                                <div className="flex flex-col text-primary text-xl font-semibold">
                                    Allpen Hill, Type Standar
                                    <p className=" font-light text-sm">
                                        Pamulang, Tangerang Selatan
                                    </p>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div>
                                        <p className="bg-primary p-2 rounded-lg text-white">
                                            Dalam Pembangunan
                                        </p>
                                    </div>
                                    <div>
                                        <p className="bg-cyan-500 p-2 rounded-lg text-white">
                                            Sisa 4 Unit
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-primary font-semibold">
                                Lihat Lokasi Map
                            </p>
                            <p className="text-primary font-semibold">
                                Rp. 400 Juta
                            </p>
                            <div className=" border-t-2 border-b-2 border-cyan-500 w-full p-2 flex flex-row gap-5">
                                <div className=" space-x-2">
                                    - 4 kamar tidur
                                </div>
                                <div className=" space-x-2">
                                    - Luas Tanah 28 m2
                                </div>
                                <div className=" space-x-2">
                                    - Luas Bangunan 27 m2
                                </div>
                            </div>
                            <p className="text-primary font-semibold">
                                Opsi Pembiayaan: KPR, Case Bertahap, Case Keras
                            </p>
                        </div>
                        <div className="bg-white border w-full rounded-md shadow-md p-5 flex flex-col gap-3">
                            {/* tabel */}
                            <p className="text-black font-semibold">
                                Pilihan Unit (4)
                            </p>
                            <div className="overflow-x-auto">
                                <table className="table border-b">
                                    <thead>
                                        <tr>
                                            <td className="text-black text-lg">
                                                Nama Unit
                                            </td>
                                            <td className="text-black text-lg">
                                                Harga Case Keras
                                            </td>
                                            <td className="text-black text-lg">
                                                Luas Tanah
                                            </td>
                                            <td className="text-black text-lg">
                                                Luas Bangunan
                                            </td>
                                            <td className="text-black text-lg">
                                                Status
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>A1</td>
                                            <td>Rp. 400 Juta</td>
                                            <td>28 m2</td>
                                            <td>27 m2</td>
                                            <td className="text-cyan-500">
                                                Tersedia
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>A2</td>
                                            <td>Rp. 400 Juta</td>
                                            <td>28 m2</td>
                                            <td>27 m2</td>
                                            <td className="text-cyan-500">
                                                Tersedia
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>A3</td>
                                            <td>Rp. 400 Juta</td>
                                            <td>28 m2</td>
                                            <td>27 m2</td>
                                            <td className="text-cyan-500">
                                                Tersedia
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>A4</td>
                                            <td>Rp. 400 Juta</td>
                                            <td>28 m2</td>
                                            <td>27 m2</td>
                                            <td className="text-cyan-500">
                                                Tersedia
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bg-white border w-full rounded-md shadow-md p-5 flex flex-col gap-3">
                            {/* head */}
                            <p className="text-black font-semibold">
                                Spesifikasi & Fasilitas
                            </p>
                            <ul>
                                <li>Carport : 2 mobil</li>
                                <li> Listrik : 1300 va</li>
                                <li> Non Furnishid</li>
                                <li>Kamar Mandi : 2</li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="bg-white border w-full rounded-md shadow-md p-5 flex flex-col gap-3">
                            {/* tabel */}
                            <p className="text-black font-semibold">
                                Type Lainya
                            </p>
                            <div className="overflow-x-auto">
                                <table className="table border-b">
                                    <thead>
                                        <tr>
                                            <td className="text-black text-lg">
                                                Nama Type
                                            </td>
                                            <td className="text-black text-lg">
                                                Harga Case Keras
                                            </td>
                                            <td className="text-black text-lg">
                                                Luas Tanah
                                            </td>
                                            <td className="text-black text-lg">
                                                Luas Bangunan
                                            </td>
                                            <td className="text-black text-lg">
                                                Lantai
                                            </td>
                                            <td className="text-black text-lg">
                                                Status
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <button
                                                    onClick={
                                                        handleChangeExlisive
                                                    }
                                                >
                                                    Exlisive
                                                </button>
                                            </td>
                                            <td>Rp. 400 Juta</td>
                                            <td>28 m2</td>
                                            <td>27 m2</td>
                                            <td>2 Lantai</td>
                                            <td className="text-cyan-500">
                                                Sisa 5 Unit
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/5">
                        <div class="bg-white shadow-lg flex flex-col gap-2 p-2 rounded-md border">
                            <Link href={`/order/${id}`} class="bg-primary text-white font-semibold p-2 rounded-md">
                                Pesan
                            </Link>
                            <div class="bg-green-200 text-white font-semibold p-2 rounded-md flex flex-row items-center gap-5">
                                <i class="fab fa-whatsapp text-green-400 text-xl"></i>
                                <p> Konsultasi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
