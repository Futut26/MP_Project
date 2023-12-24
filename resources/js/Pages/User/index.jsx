import React from "react";
import UserLayout from "../../Layouts/UserLayout";
import SectionHero from "@/Components/UserComponents/Home/SectionHero";
import { Link } from "@inertiajs/react";
import SectionNewProperty from "@/Components/UserComponents/Home/SectionNewProperty";

export default function index({ auth, title }) {
    return (
        <UserLayout auth={auth} title={title} >
            <div className="flex gap-10 flex-col w-full py-10">
                <SectionHero />
                <SectionNewProperty />
                <section className="w-full h-auto">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-extrabold text-primary w-[20%]">
                            Rekomendasi Hunian
                        </h1>
                    </div>

                    <div className="mt-5 border-t-2 h-[500px] w-full  border-b-2 border-secondary border-opacity-60 flex justify-between py-5">
                        <div className="flex flex-col  w-[30%] shadow-xl">
                            <div className="h-[50%] flex flex-col justify-center bg-black">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/assets/img/properti/Ruko_2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="w-full p-4 bg-primary">
                                <h1 className=" text-white font-extrabold">
                                    Rp. 850 Juta
                                </h1>
                            </div>

                            <div className="py-2 h-[50%] flex flex-col px-4 text-primary gap-2">
                                <div>
                                    <h1 className="text-xl font-extrabold ">
                                        Rumah Nuansa Asri
                                    </h1>
                                    <p>Pondok Labu, Jakarta Selatan</p>
                                    <p>Luas Bangunan : 62 m2</p>
                                    <p>Luas Tanah : 35 m2</p>
                                </div>

                                <div className="flex justify-end">
                                    <Link
                                        href="/properti/rumah_baru/detail"
                                        className="btn  btn-secondary hover:bg-primary font-extrabold text-white"
                                    >
                                        View Properti
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col  w-[30%] shadow-xl">
                            <div className="h-[50%] flex flex-col justify-center bg-black">
                                <img
                                    className="h-full w-full object-cover"
                                    src="/assets/img/properti/cilandak.webp"
                                    alt=""
                                />
                            </div>
                            <div className="w-full p-4 bg-primary">
                                <h1 className=" text-white font-extrabold">
                                    Rp. 1,7 Miliar
                                </h1>
                            </div>

                            <div className="py-2 h-[50%] flex flex-col px-4 text-primary gap-2">
                                <div>
                                    <h1 className="text-xl font-extrabold ">
                                        Premium Living at Synthesis Homes
                                    </h1>
                                    <p>Cilandak, Jakarta Selatan</p>
                                    <p>Luas Bangunan : 73 m2</p>
                                    <p>Luas Tanah : 107 m2</p>
                                </div>

                                <div className="flex justify-end">
                                    <Link
                                        href="/properti/rumah_baru/detail"
                                        className="btn  btn-secondary hover:bg-primary font-extrabold text-white"
                                    >
                                        View Properti
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col  w-[30%] shadow-xl">
                            <div className="h-[50%] flex flex-col justify-center bg-black">
                                <img
                                    className="h-full object-cover"
                                    src="/assets/img/properti/Ruko.webp"
                                    alt=""
                                />
                            </div>
                            <div className="w-full p-4 bg-primary">
                                <h1 className=" text-white font-extrabold">
                                    Rp. 1,4 Miliar
                                </h1>
                            </div>

                            <div className="py-2 h-[50%] flex flex-col px-4 text-primary gap-2">
                                <div>
                                    <h1 className="text-xl font-extrabold ">
                                    Puri Angsana Loka Sawangan
                                    </h1>
                                    <p>Pancoran, Jakarta Selatan</p>
                                    <p>Luas Bangunan : 90 m2</p>
                                    <p>Luas Tanah : 108 m2</p>
                                </div>

                                <div className="flex justify-end">
                                    <Link
                                        href="/properti/rumah_baru/detail"
                                        className="btn  btn-secondary hover:bg-primary font-extrabold text-white"
                                    >
                                        View Properti
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </UserLayout>
    );
}
