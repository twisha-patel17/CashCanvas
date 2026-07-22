import { FiSearch } from "react-icons/fi";

export const SearchCategory = ({
  textSearch,
  setTextSearch,
}) => {
  return (
    <div className="relative w-full">

      <FiSearch
        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-lg
        text-[#7A7A7A]
        dark:text-[#B0B0B0]
        "
      />

      <input
        type="text"
        value={textSearch}
        onChange={(e) =>
          setTextSearch(e.target.value)
        }
        placeholder="Search categories..."
        className="
        h-12
        w-full
        rounded-2xl
        border
        border-[#DCD6C7]
        dark:border-[#3A3A3A]
        bg-white
        dark:bg-[#2A2A2A]
        pl-12
        pr-4
        text-sm
        text-[#1C2321]
        dark:text-white
        placeholder:text-[#9CA3AF]
        dark:placeholder:text-[#8C8C8C]
        outline-none
        transition-all
        focus:border-[#2D5A4A]
        focus:ring-2
        focus:ring-[#2D5A4A]/10
        "
      />

    </div>
  );
};