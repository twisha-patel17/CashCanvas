import logo from "../../assets/cashcanvas-logo.png";
import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiRepeat,
  FiPieChart,
  FiTarget,
  FiTag,
  FiUser,
  FiSettings,
} from "react-icons/fi";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: <FiGrid /> },
  { name: "Transactions", path: "/transactions", icon: <FiRepeat /> },
  { name: "Analytics", path: "/analytics", icon: <FiPieChart /> },
  { name: "Budget", path: "/budget", icon: <FiTarget /> },
  { name: "Categories", path: "/categories", icon: <FiTag /> },
  { name: "Profile", path: "/profile", icon: <FiUser /> },
  { name: "Settings", path: "/settings", icon: <FiSettings /> },
];

export const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
    <aside className={`w-65 h-screen fixed left-0 top-0 z-50 bg-[#1F3F34] dark:bg-[#162B24] px-4.5 py-6.5 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
      <div className="flex items-center gap-3 mb-14">
      <img
      src={logo}
      alt="CashCanvas Logo"
      className="w-10 h-10"
      />

      <h1 className="text-[#F3F0E6] dark:text-white text-[30px] font-semibold">
       CashCanvas
      </h1>
    </div> 

      <nav className="mt-10 flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            onClick={() => {
              if(window.innerWidth < 1024) {
                setIsSidebarOpen(false);
              }
            }}
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 text-[15px] font-medium transition-all duration-200 ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-[#CBD8D2] dark:text-[#B4B4B4] hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
    { 
      isSidebarOpen && (
      <div 
      onClick={() => setIsSidebarOpen(false)}
      className="fixed inset-0 z-40 bg-black/50 lg:hidden" />
    )}
   </> 
  );
};