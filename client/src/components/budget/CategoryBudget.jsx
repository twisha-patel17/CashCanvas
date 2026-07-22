export const CategoryBudget = ({ categoryBudgets }) => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-[#1F1F1F]">
      <h2 className="mb-5 text-xl font-semibold text-[#1C2321] dark:text-white">
        Category Budgets
      </h2>

      <div className="space-y-5">
        {categoryBudgets.map((category) => {
          const percentage =
            category.budget === 0
              ? 0
              : Math.round(
                  (category.spent / category.budget) * 100
                );

          return (
            <div key={category.category}>
              {/* Heading */}

              <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">
                    {category.emoji}
                  </span>

                  <p className="text-sm font-medium text-[#1C2321] dark:text-white">
                    {category.category}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#5B6360] dark:text-[#B0B0B0]">
                  ₹{category.spent.toLocaleString()} / ₹
                  {category.budget.toLocaleString()}
                </p>
              </div>

              {/* Progress Bar */}

              <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#DCD6C7] dark:bg-[#3A3A3A]">
                <div
                  style={{
                    width: `${Math.min(percentage, 100)}%`,
                    backgroundColor: category.color,
                  }}
                  className="h-full rounded-full transition-all duration-300"
                />
              </div>

              {/* Percentage */}

              <p className="mt-1 text-right text-xs text-[#5B6360]">
                {percentage}% used
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};