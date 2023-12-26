import UserLayout from "@/Layouts/UserLayout";
import { Link } from "@inertiajs/react";
import React from "react";

const dataRumahBaru = [
    {
        id: 1,
        logo: "/assets/img/properti/stellar_logo.png",
        img: "/assets/img/properti/stellar_properti.png",
        price: "Rp. 1,6 - 1,7 Miliar",
        title: " Stellar Jardin Residence",
        location: "Cikunir, Bekasi",
        luas_bangunan: "Luas Bangunan : 81 m2",
        luas_tanah: "Luas Tanah : 82 m2",
    },
    {
        id: 2,
        logo: "/assets/img/properti/stellar_logo.png",
        img: "/assets/img/properti/stellar_properti.png",
        price: "Rp. 600 - 700 Juta",
        title: " Alpen Hill Residence",
        location: "Cikunir, Bekasi",
        luas_bangunan: "Luas Bangunan : 27 m2",
        luas_tanah: "Luas Tanah : 28 m2",
    },
    {
        id: 3,
        logo: "/assets/img/properti/stellar_logo.png",
        img: "/assets/img/properti/stellar_properti.png",
        price: "Rp. 1,4 - 1,6 Miliar",
        title: " Stellar Jardin Residence",
        location: "Cikunir, Bekasi",
        luas_bangunan: "Luas Bangunan : 90 m2",
        luas_tanah: "Luas Tanah : 108 m2",
    },
    {
        id: 4,
        logo: "/assets/img/properti/stellar_logo.png",
        img: "/assets/img/properti/stellar_properti.png",
        price: "Rp. 1,6 - 1,7 Miliar",
        title: "Alpen Hill Residence",
        location: "Cikunir, Bekasi",
        luas_bangunan: "Luas Bangunan : 81 m2",
        luas_tanah: "Luas Tanah : 82 m2",
    },
    {
        id: 5,
        logo: "/assets/img/properti/stellar_logo.png",
        img: "/assets/img/properti/stellar_properti.png",
        price: "Rp. 1,7 Miliar",
        title: " Stellar Jardin Residence",
        location: "Cikunir, Bekasi",
        luas_bangunan: "Luas Bangunan : 81 m2",
        luas_tanah: "Luas Tanah : 82 m2",
    },
    {
        id: 6,
        logo: "/assets/img/properti/stellar_logo.png",
        img: "/assets/img/properti/stellar_properti.png",
        price: "Rp. 1,6 - 1,7 Miliar",
        title: " Stellar Jardin Residence",
        location: "Cikunir, Bekasi",
        luas_bangunan: "Luas Bangunan : 81 m2",
        luas_tanah: "Luas Tanah : 82 m2",
    },
];

export default function RumahBaru({ auth, title }) {
    return (
        <UserLayout auth={auth} title={title}>
            <section className="w-full h-auto mt-14">
                <div className="flex md:justify-between md:flex-row flex-col">
                    <h1 className="text-3xl font-extrabold text-primary md:w-[20%] w-full">
                        Daftar Properti Terbaru
                    </h1>
                    <p className="text-primary md:w-[30%] w-full md:text-end">
                        Cari hunian impian Anda, dari rumah minimalis hingga
                        apertemen mewah
                    </p>
                </div>

                <div className="mt-5 h-auto border-t-2 border-b-2 border-secondary border-opacity-60 flex md:flex-row flex-col flex-wrap justify-between py-5 gap-5 md:gap-0">
                    {dataRumahBaru.map((item, i) => (
                        <div
                            key={i}
                            className="shadow-lg md:w-[30%] flex md:flex-col flex-col"
                        >
                            <figure className="flex justify-end">
                                <img className="h-14" src={item.logo} alt="" />
                            </figure>
                            <figure className="flex flex-col w-full">
                                <img src={item.img} alt="" />
                                <h1 className="w-full p-4 bg-primary text-white font-extrabold">
                                    {item.price}
                                </h1>
                            </figure>

                            <div className="py-2 flex flex-col px-4 text-primary gap-5">
                                <div>
                                    <h1 className="text-xl font-extrabold ">
                                        {item.title}
                                    </h1>
                                    <p>{item.location}</p>
                                </div>

                                <div>
                                    <p>{item.luas_bangunan}</p>
                                    <p>{item.luas_tanah}</p>
                                </div>

                                <div className="flex justify-end">
                                    <Link
                                        href={`/rumah-baru/detail/${item.id}`}
                                        className="btn btn-secondary hover:bg-primary font-extrabold text-white"
                                    >
                                        View Properti
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </UserLayout>
    );
}
