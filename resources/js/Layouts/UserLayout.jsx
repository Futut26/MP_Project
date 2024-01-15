import React from "react";
import Navbar from "../Components/UserComponents/Navbar";
import Footer from "@/Components/UserComponents/Footer";
import Hero from "@/Components/UserComponents/Hero";
import { Head, usePage } from "@inertiajs/react";

export default function UserLayout({ children, auth, title }) {
    const { jenis_properti } = usePage().props;
    const pathname = window.location.pathname;
    return (
        <>
            {title && <Head title={title} />}
            <div>
                <Navbar auth={auth} />
                {pathname === "/" && <Hero />}
                <div className="lg:px-32 md:px-10 px-5 ">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}
