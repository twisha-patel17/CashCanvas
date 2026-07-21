export const TopBudgetCategories = ({ topCategories }) => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-[#1F1F1F]">
      <h2 className="mb-5 text-xl font-semibold text-[#1C2321] dark:text-white">
        Top Spending Categories
      </h2>

      <div className="space-y-4">
        {topCategories.slice(0, 5).map((category, index) => (
          <div
            key={category.category}
            className="border-b border-[#DCD6C7] pb-3 last:border-none last:pb-0 dark:border-[#3A3A3A]"
          >
            <div className="mb-2 text-xs font-semibold text-[#5B6360] dark:text-[#B0B0B0]">
              #{index + 1}
            </div>

            <div className="flex items-center justify-between">
              {/* Category */}

              <div className="flex items-center gap-2">
                <span className="text-lg">
                  {category.emoji}
                </span>

                <h3 className="text-sm font-medium text-[#1C2321] dark:text-white">
                  {category.category}
                </h3>
              </div>

              {/* Amount */}

              <p
                style={{ color: category.color }}
                className="text-base font-semibold"
              >
                ₹{category.amount.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};