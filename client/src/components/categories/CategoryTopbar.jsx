import { FiPlus, FiMenu } from "react-icons/fi";

export const CategoryTopbar = ({
  onAddCategory,
  setIsSidebarOpen,
}) => {
  return (
    <div
      className="
      flex
      flex-col
      gap-4
      sm:flex-row
      sm:items-center
      sm:justify-between
      border-b
      border-[#DCD6C7]
      dark:border-[#3A3A3A]
      bg-white
      dark:bg-[#1F1F1F]
      px-5
      sm:px-8
      py-5
      "
    >
      {/* Left Section */}

      <div
        className="
        flex
        items-center
        gap-4
        "
      >
        <button
          onClick={() =>
            setIsSidebarOpen(true)
          }
          className="
          lg:hidden
          text-2xl
          text-[#1C2321]
          dark:text-white
          "
        >
          <FiMenu />
        </button>

        <h1
          className="
          text-2xl
          sm:text-3xl
          font-bold
          text-[#1C2321]
          dark:text-white
          "
        >
          Categories
        </h1>
      </div>

      {/* Right Section */}

      <button
        onClick={onAddCategory}
        className="
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-[#2D5A4A]
        px-5
        py-3
        text-white
        transition
        hover:bg-[#23483A]
        "
      >
        <FiPlus />
        Add Category
      </button>
    </div>
  );
};