export const Pagination = () => {
  return (
    <div className="mt-6 flex items-center justify-center gap-3">

      {/* Previous Button */}

      <button
        className="
        rounded-xl
        border
        border-[#DCD6C7]
        bg-white
        px-4
        py-2
        text-sm
        font-medium
        text-[#5B6360]
        transition
        hover:bg-[#F7F5EF]
        "
      >
        Previous
      </button>


      {/* Page Numbers */}

      <button
        className="
        rounded-xl
        bg-[#2D5A4A]
        px-4
        py-2
        text-sm
        font-semibold
        text-white
        "
      >
        1
      </button>


      <button
        className="
        rounded-xl
        border
        border-[#DCD6C7]
        bg-white
        px-4
        py-2
        text-sm
        font-medium
        text-[#1C2321]
        transition
        hover:bg-[#F7F5EF]
        "
      >
        2
      </button>


      <button
        className="
        rounded-xl
        border
        border-[#DCD6C7]
        bg-white
        px-4
        py-2
        text-sm
        font-medium
        text-[#1C2321]
        transition
        hover:bg-[#F7F5EF]
        "
      >
        3
      </button>


      {/* Next Button */}

      <button
        className="
        rounded-xl
        border
        border-[#DCD6C7]
        bg-white
        px-4
        py-2
        text-sm
        font-medium
        text-[#5B6360]
        transition
        hover:bg-[#F7F5EF]
        "
      >
        Next
      </button>

    </div>
  );
};