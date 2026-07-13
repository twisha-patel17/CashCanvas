export const BudgetProgress = () => {
  const budget = 40000;
  const spent = 30000;
  const todaySpent = 650;
  const daysLeft = 18;

  const remaining = budget - spent;
  const percentage = Math.round((spent / budget) * 100);

  return (
    <div className="rounded-2xl border border-[#DCD6C7] bg-white p-5">
      <h2 className="text-[15px] font-semibold text-[#1C2321]">
        Budget Progress
      </h2>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="h-3 w-full overflow-hidden rounded-full bg-[#DCD6C7]">
          <div
            className="h-full rounded-full bg-[#2D5A4A]"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <p className="mt-3 text-sm text-[#5B6360]">
          {percentage}% of ₹{budget.toLocaleString()} budget used
        </p>
      </div>

      {/* Budget Info */}
      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between">
          <span className="text-sm text-[#5B6360]">
            Spent Today
          </span>

          <span className="font-medium text-[#1C2321]">
            ₹{todaySpent.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-[#5B6360]">
            Remaining Budget
          </span>

          <span className="rounded-full bg-[#EDF5F2] px-3 py-1 text-sm font-medium text-[#2D5A4A]">
            ₹{remaining.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-[#5B6360]">
            Days Left
          </span>

          <span className="font-medium text-[#1C2321]">
            {daysLeft} Days
          </span>
        </div>

      </div>
    </div>
  );
};