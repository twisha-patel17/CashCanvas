export const TransactionFilters = ({selectedType,

    setSelectedType,

    selectedCategory,

    setSelectedCategory,

    selectedPaymentMethod,

    setSelectedPaymentMethod,

    sortBy,

    setSortBy,

    categories,}) => {
  return (
    <div className="flex items-center gap-3">

      {/* Type */}
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
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
        <option value="all">All Transactions</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
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