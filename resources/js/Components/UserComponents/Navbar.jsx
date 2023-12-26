import { Link, usePage } from "@inertiajs/react";
import Menu from "@/Utils/Menu";
import React from "react";

export default function Navbar({ auth }) {
    const { jenis_properti } = usePage().props;

    return (
        <div>
            <nav className="w-full md:h-20 h-14 bg-white shadow-lg flex md:px-10 lg:px-32 fixed top-0 z-50 px-5">
                <Link href="/" className="w-auto">
                    <figure className="h-full">
                        <img
                            className="h-full"
                            src="/assets/img/Logo.png"
                            alt="Mp-Project"
                        />
                    </figure>
                </Link>

                <div className="w-auto ml-auto   md:items-center hidden md:flex">
                    <ul className="flex items-center gap-5">
                        <div className="dropdown dropdown-hover">
                            <label
                                tabIndex={0}
                                className="cursor-pointer hover:text-secondary hover:font-bold hover:border-b-2 border-secondary m-1"
                            >
                                Properti <i className="fas fa-chevron-down"></i>
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80 h-auto"
                            >
                                <div className="flex gap-5 flex-col ">
                                    <div className="w-full">
                                        <label className="text-base font-bold">
                                            Residensial
                                        </label>
                                        <li>
                                            <Link href="/rumah-baru">
                                                Rumah Baru
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/rumah-seken">
                                                Rumah Seken
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/rumah-lelang">
                                                Rumah Lelang
                                            </Link>
                                        </li>
                                    </div>

                                    <div className="w-full h-auto">
                                        <label className="text-base font-bold">
                                            Komersial
                                        </label>
                                        <li>
                                            <Link href="/ruko-baru">
                                                Ruko Baru
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/ruko-second">
                                                Ruko Second
                                            </Link>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </div>

                        <div className="dropdown dropdown-hover ">
                            <label
                                tabIndex={1}
                                className="cursor-pointer hover:text-secondary hover:font-bold hover:border-b-2 border-secondary m-1"
                            >
                                KPR <i className="fas fa-chevron-down"></i>
                            </label>
                            <ul
                                tabIndex={1}
                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36 "
                            >
                                <div className="w-full">
                                    <li className="w-full">
                                        <Link href="#">Tentang KPR</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Simulasi KPR</Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <li>
                            <Link
                                className="hover:text-secondary hover:font-bold hover:border-b-2 border-secondary"
                                href="#"
                            >
                                Artikel
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-secondary hover:font-bold hover:border-b-2 border-secondary"
                                href="#"
                            >
                                Tentang Kami
                            </Link>
                        </li>
                        {auth.user ? (
                            <li>
                                <div className="dropdown dropdown-hover ">
                                    <label
                                        tabIndex={1}
                                        className="  cursor-pointer hover:text-secondary hover:font-bold hover:border-b-2 border-secondary m-1 flex items-center gap-2"
                                    >
                                        <i className="fas fa-user-circle text-2xl"></i>
                                        <i className="fas fa-chevron-down"></i>
                                    </label>
                                    <ul
                                        tabIndex={1}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36 "
                                    >
                                        <div className="w-full">
                                            <li className="w-full">
                                                <Link
                                                    href="/profile"
                                                    as="button"
                                                >
                                                    Profile
                                                </Link>
                                            </li>
                                            {auth.user.role_id === 1 ? (
                                                <li>
                                                    <Link as="button" href="#">
                                                        Transaksi
                                                    </Link>
                                                </li>
                                            ) : (
                                                ""
                                            )}

                                            <li>
                                                <Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Logout
                                                </Link>
                                            </li>

                                            {/* cek role !== konsumen go to /admin*/}
                                            {auth.user.role_id !== 1 ? (
                                                <li>
                                                    <Link
                                                        as="button"
                                                        href="/admin"
                                                    >
                                                        Dashboard Admin
                                                    </Link>
                                                </li>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </ul>
                                </div>
                            </li>
                        ) : (
                            <li>
                                <Link
                                    className="btn btn-md btn-secondary font-bold text-white hover:bg-primary"
                                    href={route("login")}
                                    as="button"
                                >
                                    Daftar/Masuk
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>

            <div className=" w-full h-screen fixed inset-0 z-50 flex justify-end md:hidden">
                <div className="bg-white h-full w-[65%]"></div>
            </div>
        </div>
    );
}
