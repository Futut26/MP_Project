import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const Navbar = ({auth}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="">
            <nav
                className={`w-full md:h-20 h-14 bg-white shadow-md  flex md:px-10 lg:px-32 fixed top-0 z-50 px-5 mt-[-3px]`}
            >
                <Link href="/" className="w-auto">
                    <figure className="h-full py-2">
                        <img
                            className="h-full"
                            src="/assets/img/Logo.png"
                            alt="Mp-Project"
                        />
                    </figure>
                </Link>

                <div className="w-auto ml-auto md:items-center hidden md:flex">
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

                        <li>
                            {auth.user ? (

                                <Link
                                    className="hover:text-secondary hover:font-bold hover:border-b-2 border-secondary"
                                    href="/dashboard"
                                    >
                                    Dashboard
                                    </Link>
                                    ) : (
                                        <Link
                                            className="hover:text-secondary hover:font-bold hover:border-b-2 border-secondary"
                                            href="/login"
                                            >
                                            Login
                                            </Link>
                                            )}

                        </li>
                    </ul>
                </div>

                <div className="w-auto ml-auto md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="h-full"
                    >
                        <i
                            className={`${
                                isOpen ? "fas fa-times" : "fas fa-bars"
                            }`}
                        ></i>
                    </button>
                </div>
            </nav>

            <div
                className={`fixed top-[6%] right-0 h-screen w-screen z-30 transform transition-transform duration-500 ${
                    isOpen ? "translate-x-[25%] " : "translate-x-full"
                }`}
            >
                <div className={`bg-white   h-screen w-[75%] ${isOpen ? "shadow-lg" : ""}`}>
                    {/* icon close */}
                    <div className="">
                        {/* menu */}
                        <div className="flex flex-col gap-5 p-5 items-center">
                            <ul className="w-full">
                                 <Link href="/">
                                    <li className="p-2 text-center w-full hover:bg-red-100">
                                        Beranda
                                    </li>
                                </Link>

                                <Link href="/">
                                    <li className="p-2 text-center w-full hover:bg-red-100">
                                        Tentang Kami
                                    </li>
                                </Link>

                                <Link href="#contact">
                                    <li className="p-2 text-center w-full hover:bg-red-100">
                                        Layanan
                                    </li>
                                </Link>

                                <Link href="#contact">
                                    <li className="p-2 text-center w-full hover:bg-red-100">
                                        Project
                                    </li>
                                </Link>

                                <Link href="#contact">
                                    <li className="p-2 text-center w-full hover:bg-red-100">
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
