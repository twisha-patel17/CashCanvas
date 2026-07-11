import { FiSearch, FiMoon, FiBell } from "react-icons/fi";

export const DashboardTopbar = () => {
  return (
   <div className="flex items-center justify-between mb-8">

    {/* Search Bar */}
    <div className="relative w-[320px]">
  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

  <input
  type="text"
  placeholder="Search transactions..."
  className="w-full rounded-lg border border-[#DCD6C7] bg-[#FDFCF9] py-2.5 pl-10 pr-4 text-sm text-[#1C2321] shadow-sm outline-none focus:border-[#2D5A4A] focus:ring-2 focus:ring-[#2D5A4A]/20"
/>
</div>

    {/* Right Side */}

    <div className="flex items-center gap-5">
      <button className="text-[#B8934A] text-xl transition-all duration-200 hover:scale-110 hover:text-[#D4AF37]">
        <FiMoon />
      </button>
      <button className="text-[#B8934A] text-xl transition-all duration-200 hover:scale-110 hover:text-[#D4AF37]">
        <FiBell />
      </button>
      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B8934A] text-sm font-bold text-[#241A06] hover:scale-105 transition">
       TP
      </button>
    </div>

</div>
  )
}

