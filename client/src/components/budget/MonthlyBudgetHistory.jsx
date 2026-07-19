export const MonthlyBudgetHistory = ({

    history,

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
                mb-5
                text-xl
                font-semibold
                text-[#1C2321]
                "
            >
                Monthly History
            </h2>


            <div
                className="
                space-y-4
                "
            >

                {history.map((month) => (

                    <div

                        key={month.month}

                        className="
                        border-b
                        border-[#DCD6C7]
                        pb-4
                        last:border-none
                        last:pb-0
                        "
                    >

                        {/* Month */}

                        <h3
                            className="
                            text-lg
                            font-semibold
                            text-[#1C2321]
                            "
                        >
                            {month.month}
                        </h3>



                        {/* Details */}

                        <div
                            className="
                            mt-2
                            space-y-1
                            text-sm
                            "
                        >

                            <p
                                className="
                                text-[#5B6360]
                                "
                            >
                                Budget :
                                {" "}
                                ₹{month.budget
                                    .toLocaleString()}
                            </p>


                            <p
                                className="
                                text-[#5B6360]
                                "
                            >
                                Expense :
                                {" "}
                                ₹{month.expense
                                    .toLocaleString()}
                            </p>


                            <p
                                className={`
                                font-medium

                                ${
                                    month.remaining >= 0

                                    ? "text-[#2D5A4A]"

                                    : "text-[#C1633D]"
                                }
                                `}
                            >
                                {

                                    month.remaining >= 0

                                        ? "Remaining : "

                                        : "Exceeded : "

                                }

                                ₹
                                {Math.abs(
                                    month.remaining
                                ).toLocaleString()}

                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

};