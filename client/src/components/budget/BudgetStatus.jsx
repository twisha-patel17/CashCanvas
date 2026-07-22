export const BudgetStatus = ({
  budgetStatus,
  budgetUsedPercentage,
  remainingBudget,
}) => {
  const statusColor = {
    Safe: "text-[#3E8E7E]",
    Warning: "text-[#B8934A]",
    Exceeded: "text-[#C1633D]",
  };

  const statusMessage = {
    Safe: "You're within your monthly budget.",
    Warning: "You're nearing your monthly limit.",
    Exceeded: "You've exceeded your monthly budget.",
  };

  const budgetAdvice = {
    Safe: "You're managing your budget well.",
    Warning:
      "Avoid unnecessary expenses this week.",
    Exceeded:
      "Reduce spending in your top categories.",
  };

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-[#1F1F1F]">
      <h2 className="text-xl font-semibold text-[#1C2321] dark:text-white">
        Budget Status
      </h2>

      {/* Status */}
      <h1
        className={`mt-5 text-center text-3xl font-bold ${
          statusColor[budgetStatus]
        }`}
      >
        {budgetStatus}
      </h1>

      <p className="mt-3 text-center text-xs sm:text-sm text-[#5B6360] dark:text-[#B0B0B0]">
        {statusMessage[budgetStatus]}
      </p>

      {/* Monthly Health */}
      <div className="mt-6 rounded-xl bg-[#F7F5EF] p-3 sm:p-4 dark:bg-[#2A2A2A]">
        <p className="text-sm font-medium text-[#5B6360] dark:text-[#B0B0B0]">
          Monthly Health
        </p>

        <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[#1C2321] dark:text-white">
          {budgetUsedPercentage}% Used
        </h3>
      </div>

      {/* Remaining Budget */}
      <div className="mt-4 rounded-xl bg-[#F7F5EF] sm:p-4 p-3 dark:bg-[#2A2A2A]">
        <p className="text-sm font-medium text-[#5B6360] dark:text-[#B0B0B0]">
          {remainingBudget >= 0
            ? "Remaining Budget"
            : "Exceeded Amount"}
        </p>

        <h3
          className={`mt-1 text-lg sm:text-xl font-bold ${
            remainingBudget >= 0
              ? "text-[#2D5A4A]"
              : "text-[#C1633D]"
          }`}
        >
          ₹
          {Math.abs(
            remainingBudget
          ).toLocaleString()}
        </h3>
      </div>

      {/* Advice */}
      <div className="mt-4 rounded-xl bg-[#F7F5EF] sm:p-4 p-3 dark:bg-[#2A2A2A]">
        <p className="text-sm font-medium text-[#5B6360] dark:text-[#B0B0B0]">
          Budget Advice
        </p>

        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#1C2321] dark:text-white">
          {budgetAdvice[budgetStatus]}
        </p>
      </div>
    </div>
  );
};