export const MonthlyExpenseChart = () => {
  const last7Days = [
    { day: "8", amount: 450 },
    { day: "9", amount: 900 },
    { day: "10", amount: 250 },
    { day: "11", amount: 1200 },
    { day: "12", amount: 600 },
    { day: "13", amount: 300 },
    { day: "14", amount: 800 },
  ];

  const maxExpense = Math.max(
    ...last7Days.map((day) => day.amount)
  );

  return (
    <div className="rounded-2xl border border-[#DCD6C7] bg-white p-5">
      <div className="mb-6">
        <h2 className="text-[15px] font-semibold text-[#1C2321]">
          Monthly Expense
        </h2>

        <p className="mt-1 text-xs text-[#5B6360]">
          Last 7 Days • July 2026
        </p>
      </div>

      <div className="flex h-55 items-end justify-between">
        {last7Days.map((day) => (
          <div
            key={day.day}
            className="flex flex-col items-center gap-2"
          >
            <div
              className="w-8 rounded-t-md bg-[#2D5A4A] transition-all duration-300"
              style={{
                height: `${(day.amount / maxExpense) * 160}px`,
              }}
            ></div>

            <span className="text-xs text-[#5B6360]">
              {day.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
