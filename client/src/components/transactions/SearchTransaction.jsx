import { FiSearch } from "react-icons/fi";

export const SearchTransaction = ({ searchTerm, setSearchTerm }) => {
  return (

   <div className="relative flex-1">

    <FiSearch
        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-gray-400
        dark:text-gray-500
        "
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
        dark:border-[#3A3A3A]
        bg-white
        dark:bg-[#1F1F1F]
        py-3
        pl-12
        pr-4
        text-[#1C2321]
        dark:text-white
        placeholder:text-[#5B6360]
        dark:placeholder:text-gray-500
        outline-none
        focus:border-[#2D5A4A]
        dark:focus:border-[#3E8E7E]
        "
    />

</div>

  );
};