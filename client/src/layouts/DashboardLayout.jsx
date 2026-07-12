import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";

export const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-7 bg-[#F8F6F2] min-h-screen">
            <Outlet />
        </main>
    </div>
  );
};
