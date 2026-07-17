export const TransactionFilters = () => {
  return (
    <div className="flex items-center gap-3">

      {/* Type */}
      <select
        className="
        rounded-xl
        border
        border-[#DCD6C7]
        bg-white
        px-4
        py-3
        text-sm
        text-[#1C2321]
        outline-none
        transition
        focus:border-[#2D5A4A]
        "
      >
        <option>All Transactions</option>
        <option>Income</option>
        <option>Expense</option>
      </select>


      {/* Category */}
      <select
        className="
        rounded-xl
        border
        border-[#DCD6C7]
        bg-white
        px-4
        py-3
        text-sm
        text-[#1C2321]
        outline-none
        transition
        focus:border-[#2D5A4A]
        "
      >
        <option>All Categories</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Gym</option>
      </select>


      {/* Sort */}
      <select
        className="
        rounded-xl
        border
        border-[#DCD6C7]
        bg-white
        px-4
        py-3
        text-sm
        text-[#1C2321]
        outline-none
        transition
        focus:border-[#2D5A4A]
        "
      >
        <option>Newest</option>
        <option>Oldest</option>
        <option>Highest Amount</option>
        <option>Lowest Amount</option>
      </select>

    </div>
  );
};