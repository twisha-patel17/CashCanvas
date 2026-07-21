export const TransactionFilters = ({
  selectedType,
  setSelectedType,
  selectedCategory,
  setSelectedCategory,
  selectedPaymentMethod,
  setSelectedPaymentMethod,
  sortBy,
  setSortBy,
  categories,
}) => {
  return (
    <div className="flex items-center gap-3">
      {/* Type */}
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="rounded-xl border border-[#DCD6C7] bg-white px-4 py-3 text-sm text-[#1C2321] outline-none transition focus:border-[#2D5A4A] dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-white"
      >
        <option value="all">All Transactions</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Category */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="rounded-xl border border-[#DCD6C7] bg-white px-4 py-3 text-sm text-[#1C2321] outline-none transition focus:border-[#2D5A4A] dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-white"
      >
        <option>All Categories</option>

        {categories.map((category) => (
          <option key={category._id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      {/* Payment Method */}
      <select
        value={selectedPaymentMethod}
        onChange={(e) => setSelectedPaymentMethod(e.target.value)}
        className="rounded-xl border border-[#DCD6C7] bg-white px-4 py-3 text-sm text-[#1C2321] outline-none transition focus:border-[#2D5A4A] dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-white"
      >
        <option value="all">All Methods</option>
        <option value="UPI">UPI</option>
        <option value="Cash">Cash</option>
        <option value="Bank Transfer">Bank Transfer</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
      </select>

      {/* Sort */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-xl border border-[#DCD6C7] bg-white px-4 py-3 text-sm text-[#1C2321] outline-none transition focus:border-[#2D5A4A] dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-white"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="highest">Highest Amount</option>
        <option value="lowest">Lowest Amount</option>
      </select>
    </div>
  );
};