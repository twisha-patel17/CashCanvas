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

        <div className="rounded-2xl border border-[#DCD6C7] dark:border-[#3A3A3A] bg-white dark:bg-[#1F1F1F] p-5">

            <h2 className="text-[15px] font-semibold text-[#1C2321] dark:text-white">
                Budget Progress
            </h2>


            {/* Progress Bar */}

            <div className="mt-6">

                <div className="h-3 w-full overflow-hidden rounded-full bg-[#DCD6C7] dark:bg-[#3A3A3A]">

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


                <p className="mt-3 text-sm text-[#5B6360] dark:text-[#A1A1AA]">

                    {budgetUsedPercentage}% of this month's budget used

                </p>

            </div>



            {/* Details */}

            <div className="mt-8 space-y-4">

                <div className="flex items-center justify-between">

                    <span className="text-sm text-[#5B6360] dark:text-[#A1A1AA]">
                        Total Budget
                    </span>

                    <span className="font-medium text-[#1C2321] dark:text-[#FFFFFF]">
                        ₹{totalBudget.toLocaleString()}
                    </span>

                </div>


                <div className="flex items-center justify-between">

                    <span className="text-sm text-[#5B6360] dark:text-[#A1A1AA]">
                        Total Spent
                    </span>

                    <span className="font-medium text-[#C1633D]">
                        ₹{totalExpense.toLocaleString()}
                    </span>

                </div>


                <div className="flex items-center justify-between">

                    <span className="text-sm text-[#5B6360] dark:text-[#A1A1AA]">
                        Remaining Budget
                    </span>

                    <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                            remainingBudget < 0
                                ? "bg-[#FCEFEA] dark:bg-[#452622] text-[#C1633D]"
                                : "bg-[#EDF5F2] dark:bg-[#20372F] text-[#2D5A4A]"
                        }`}
                    >
                        ₹{remainingBudget.toLocaleString()}
                    </span>

                </div>


                <div className="flex items-center justify-between">

                    <span className="text-sm text-[#5B6360] dark:text-[#A1A1AA]">
                        Days Left
                    </span>

                    <span className="font-medium text-[#1C2321] dark:text-[#FFFFFF]">
                        {daysLeft} Days
                    </span>

                </div>

            </div>

        </div>

    );

};