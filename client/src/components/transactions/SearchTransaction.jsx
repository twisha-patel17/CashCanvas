import { FiSearch } from "react-icons/fi";

export const SearchTransaction = ({ searchTerm, setSearchTerm }) => {
  return (

    <div className="relative flex-1">

    <FiSearch
    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    />

    <input
    type="text"
    placeholder="Search transactions..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="
    w-full
    rounded-xl
    border
    border-[#DCD6C7]
    bg-white
    py-3
    pl-12
    pr-4
    text-[#1C2321]
    outline-none
    focus:border-[#2D5A4A]
    "
    />

</div>

  );
};