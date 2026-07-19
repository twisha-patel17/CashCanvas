export const BudgetProgress = ({
    totalBudget,
    totalExpense,
    remainingBudget,
    budgetUsedPercentage,
    daysLeft,
}) => {

    const progressWidth = Math.min(
        budgetUsedPercentage,
        100
    );

    const isExceeded =
        budgetUsedPercentage > 100;


    return (

        <div className="rounded-2xl border border-[#DCD6C7] bg-white p-5">

            <h2 className="text-[15px] font-semibold text-[#1C2321]">
                Budget Progress
            </h2>


            {/* Progress Bar */}

            <div className="mt-6">

                <div className="h-3 w-full overflow-hidden rounded-full bg-[#DCD6C7]">

                    <div
                        className={`h-full rounded-full ${
                            isExceeded
                                ? "bg-[#C1633D]"
                                : "bg-[#2D5A4A]"
                        }`}
                        style={{
                            width: `${progressWidth}%`,
                        }}
                    />

                </div>


                <p className="mt-3 text-sm text-[#5B6360]">

                    {budgetUsedPercentage}% of this month's budget used

                </p>

            </div>



            {/* Details */}

            <div className="mt-8 space-y-4">

                <div className="flex items-center justify-between">

                    <span className="text-sm text-[#5B6360]">
                        Total Budget
                    </span>

                    <span className="font-medium text-[#1C2321]">
                        ₹{totalBudget.toLocaleString()}
                    </span>

                </div>


                <div className="flex items-center justify-between">

                    <span className="text-sm text-[#5B6360]">
                        Total Spent
                    </span>

                    <span className="font-medium text-[#C1633D]">
                        ₹{totalExpense.toLocaleString()}
                    </span>

                </div>


                <div className="flex items-center justify-between">

                    <span className="text-sm text-[#5B6360]">
                        Remaining Budget
                    </span>

                    <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                            remainingBudget < 0
                                ? "bg-[#FCEFEA] text-[#C1633D]"
                                : "bg-[#EDF5F2] text-[#2D5A4A]"
                        }`}
                    >
                        ₹{remainingBudget.toLocaleString()}
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