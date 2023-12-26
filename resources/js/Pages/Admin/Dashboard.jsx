import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import ChartPemesananProperty from "@/Components/chart/ChartPemesananProperty";
import ChartPembiayaanKonsumen from "@/Components/chart/ChartPembiayaanKonsumen";

const Dashboard = ({ auth }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <AdminLayout title="Dashboard" auth={auth}>
            <div className="h-full w-full mb-[20rem]">
                <div className="flex flex-col w-full gap-10 ">
                    <div className="w-full h-[25rem] bg-white rounded-lg">
                        <ChartPemesananProperty />
                    </div>
                    <div className="w-full h-[20rem] p-5 flex justify-center bg-white rounded-lg">
                        <ChartPembiayaanKonsumen />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
