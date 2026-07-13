import { FiSearch } from "react-icons/fi";

export const SearchCategory = () => {
  return (
    <div className="relative max-w-sm">

      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search categories..."
        className="w-full rounded-xl border border-[#DCD6C7] bg-white py-3 pl-10 pr-4 outline-none focus:border-[#2D5A4A]"
      />

    </div>
  );
};
