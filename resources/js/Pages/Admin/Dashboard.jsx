import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

const Dashboard = ({ auth }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <AdminLayout title="Dashboard" auth={auth}>
            <div className="h-full w-full">
                <div className="hero h-auto bg-base-200 shadow-xl">
                    <div className="hero-content text-center">
                        <div className="w-full">
                            <h1 className="text-4xl font-bold">Holla {auth.user.name}</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
