export const BudgetSummaryCards = ({
  totalBudget,
  remainingBudget,
}) => {
  const isExceeded = remainingBudget < 0;

  return (
    <div
      className="
      grid
      grid-cols-1
      gap-6
      md:grid-cols-2
      "
    >
      {/* Total Budget */}

      <div
        className="
        rounded-2xl
        bg-white
        p-5
        shadow-sm
        dark:bg-[#1F1F1F]
        "
      >
        <h2
          className="
          text-base
          font-medium
          text-[#5B6360]
          dark:text-[#B0B0B0]
          "
        >
          Total Budget
        </h2>

        <h1
          className="
          mt-2
          text-3xl
          font-bold
          text-[#1C2321]
          dark:text-white
          "
        >
          ₹{totalBudget.toLocaleString()}
        </h1>

        <p
          className="
          mt-2
          text-sm
          text-[#5B6360]
          dark:text-[#B0B0B0]
          "
        >
          This month's budget
        </p>
      </div>

      {/* Remaining Budget */}

      <div
        className="
        rounded-2xl
        bg-white
        p-5
        shadow-sm
        dark:bg-[#1F1F1F]
        "
      >
        <h2
          className="
          text-base
          font-medium
          text-[#5B6360]
          dark:text-[#B0B0B0]
          "
        >
          Remaining Budget
        </h2>

        <h1
          className={`
          mt-2
          text-3xl
          font-bold

          ${
            remainingBudget >= 0
              ? "text-[#2D5A4A]"
              : "text-[#C1633D]"
          }
          `}
        >
          ₹{remainingBudget.toLocaleString()}
        </h1>

        <p
          className={`
          mt-2
          text-sm
          font-medium

          ${
            isExceeded
              ? "text-[#C1633D]"
              : "text-[#5B6360] dark:text-[#B0B0B0]"
          }
          `}
        >
          {isExceeded
            ? `Over budget by ₹${Math.abs(
                remainingBudget
              ).toLocaleString()}`
            : "Available to spend"}
        </p>
      </div>
    </div>
  );
};