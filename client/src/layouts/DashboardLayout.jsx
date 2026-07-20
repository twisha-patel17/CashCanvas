import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";

export const DashboardLayout = () => {
  return (
    <div className="bg-[#F8F6F2] dark:bg-[#171717] h-screen">
        <Sidebar />
        <main className="ml-65 overflow-y-auto p-7 bg-[#F8F6F2] dark:bg-[#171717] h-screen">
            <Outlet />
        </main>
    </div>
  );
};
