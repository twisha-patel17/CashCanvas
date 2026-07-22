import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";
import { useState } from "react";

export const DashboardLayout = () => {

    const [isSidebarOpen, setIsSidebarOpen] =
        useState(false);

    return (

        <div
            className="
            min-h-screen
            bg-[#F8F6F2]
            dark:bg-[#171717]
            "
        >

            <Sidebar

                isSidebarOpen={isSidebarOpen}

                setIsSidebarOpen={
                    setIsSidebarOpen
                }

            />

            <main
                className="
                lg:ml-65
                p-5
                lg:p-7
                overflow-y-auto
                "
            >

                <Outlet context={{setIsSidebarOpen}} />

            </main>

        </div>

    );

};
