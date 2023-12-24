import MenuDashboard from "@/Utils/Menu";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

const Sidebar = ({ isSidebarOpen, auth }) => {
    const [activeMenu, setActiveMenu] = useState(null);

    useEffect(() => {
        const active = MenuDashboard.find((menuRole) =>
            auth.user?.role.nama === menuRole.role
        );
        if (active) {
            setActiveMenu(active.menu);
        }
    }, [auth.user?.role.nama]);

    return (
        <aside className={`h-screen lg:w-80 shadow-md  w-[100%] lg:relative absolute z-10 ${isSidebarOpen ? "transform translate-x-0 " : "lg:translate-x-0  transform -translate-x-full"} lg:flex transition-transform duration-300 ease-in-out`}>
            <div className="lg:w-full md:w-[40%] w-[75%] bg-white h-full">
                <div className="px-5 py-5">
                    <ul className="flex flex-col gap-3 w-full">
                        {MenuDashboard.map((menuRole, index) => {
                            if (menuRole.role === auth.user?.role.nama) {
                                return menuRole.menu.map((menu, subIndex) => (
                                    <Link key={subIndex} href={menu.url} className="cursor-pointer">
                                        <li className={`font-medium w-full text-gray-600 p-2 flex gap-2 items-center hover:text-primary hover:border-b-2 hover:border-primary ${menu === activeMenu ? "text-primary border-b-2 border-primary" : ""}`}>
                                            <i className={`text-xl ${menu.icon}`}></i>
                                            {menu.name}
                                        </li>
                                    </Link>
                                ));
                            }
                            return null;
                        })}
                        <hr />
                        {/* Additional Menu Items */}
                        {auth.user?.role.nama === "staff" && (
                            <Link href="/admin/user" className="cursor-pointer">
                                <li className="font-medium w-full rounded-md text-gray-700 p-2 flex gap-2 items-center hover:text-gray-900 hover:bg-gray-200">
                                    <i className="text-xl fas fa-users"></i>
                                    User Management
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
