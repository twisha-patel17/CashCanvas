export const TopSpendingCategories = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((category) => (
        <div
          key={category.category}
          className="
          flex
          items-center
          justify-between
          border-b
          border-[#F1EEE6]
          pb-4
          dark:border-[#3A3A3A]
          "
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">
              {category.emoji}
            </span>

            <p className="text-sm sm:text-lg font-medium text-[#1C2321] dark:text-white">
              {category.category}
            </p>
          </div>

          <p className="text-sm sm:text-lg font-semibold text-[#1C2321] dark:text-white">
            ₹{category.amount}
          </p>
        </div>
      ))}
    </div>
  );
};