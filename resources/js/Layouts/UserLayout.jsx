import React from "react";
import Navbar from "../Components/UserComponents/Navbar";
import Footer from "@/Components/UserComponents/Footer";
import Hero from "@/Components/UserComponents/Hero";
import { Head, usePage } from "@inertiajs/react";

export default function UserLayout({ children, auth, title }) {
    const { jenis_properti } = usePage().props;
    console.log(title);
    return (
        <>
            {title && <Head title={title} />}
            <div>
                <Navbar auth={auth} />
                <Hero />
                <div className="lg:px-32 md:px-10 px-5  md:pt-10">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}
