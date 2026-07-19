export const BudgetProgress = ({

    totalBudget,

    totalExpense,

    budgetUsedPercentage,

}) => {

    return (

        <div
            className="
            rounded-2xl
            bg-white
            p-5
            shadow-sm
            "
        >

            <h2
                className="
                text-xl
                font-semibold
                text-[#1C2321]
                "
            >
                Budget Progress
            </h2>


            <h1
                className="
                mt-5
                text-center
                text-4xl
                font-bold
                text-[#2D5A4A]
                "
            >
                {budgetUsedPercentage}%
            </h1>


            {/* Progress Bar */}

            <div
                className="
                mt-5
                h-3
                w-full
                overflow-hidden
                rounded-full
                bg-[#DCD6C7]
                "
            >

                <div

                    style={{

                        width: `${Math.min(

                            budgetUsedPercentage,

                            100

                        )}%`,

                    }}

                    className={`
                    h-full
                    rounded-full
                    transition-all
                    duration-300

                    ${
                        budgetUsedPercentage < 70

                        ? "bg-[#2D5A4A]"

                        : budgetUsedPercentage <= 100

                        ? "bg-[#B8934A]"

                        : "bg-[#C1633D]"
                    }
                    `}
                />

            </div>


            <p
                className="
                mt-3
                text-center
                text-base
                text-[#5B6360]
                "
            >
                ₹
                {totalExpense.toLocaleString()}

                {" / "}

                ₹
                {totalBudget.toLocaleString()}
            </p>

        </div>

    );

};