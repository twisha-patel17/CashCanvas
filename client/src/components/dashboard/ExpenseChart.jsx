import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";


export const ExpenseChart = ({

    expenseChart = [],

    totalExpense = 0,

}) => {

    const categories = expenseChart;


    return (

        <div
            className="
            rounded-2xl
            border
            border-[#DCD6C7]
            bg-white
            p-5
            "
        >

            <h2
                className="
                text-[15px]
                font-semibold
                text-[#1C2321]
                "
            >
                Expense by Category
            </h2>



            <div
                className="
                mt-8
                flex
                items-center
                justify-center
                gap-12
                "
            >

                {/* Donut Chart */}

                <div
                    className="
                    relative
                    h-40
                    w-40
                    "
                >

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <PieChart>

                            <Pie

                                data={categories}

                                dataKey="percentage"

                                innerRadius={48}

                                outerRadius={72}

                                stroke="none"

                                paddingAngle={3}

                            >

                                {

                                    categories.map((entry) => (

                                        <Cell

                                            key={entry.name}

                                            fill={entry.color}

                                        />

                                    ))

                                }

                            </Pie>

                        </PieChart>

                    </ResponsiveContainer>



                    {/* Center Text */}

                    <div
                        className="
                        absolute
                        inset-0
                        flex
                        flex-col
                        items-center
                        justify-center
                        "
                    >

                        <h3
                            className="
                            text-xl
                            font-bold
                            text-[#1C2321]
                            "
                        >
                            ₹
                            {totalExpense.toLocaleString()}
                        </h3>


                        <p
                            className="
                            text-xs
                            text-[#5B6360]
                            "
                        >
                            This Month
                        </p>

                    </div>

                </div>




                {/* Legends */}

                <div
                    className="
                    space-y-4
                    "
                >

                    {

                        categories.map((category) => (

                            <div

                                key={category.name}

                                className="
                                flex
                                items-center
                                justify-between
                                gap-8
                                "
                            >

                                <div>

                                    <div
                                        className="
                                        flex
                                        items-center
                                        gap-2
                                        "
                                    >

                                        <span

                                            className="
                                            h-3
                                            w-3
                                            rounded-full
                                            "
                                            style={{
                                                backgroundColor:
                                                category.color,
                                            }}
                                        />

                                        <p
                                            className="
                                            text-sm
                                            font-medium
                                            text-[#1C2321]
                                            "
                                        >
                                            {category.name}
                                        </p>

                                    </div>


                                    <p
                                        className="
                                        ml-5
                                        text-xs
                                        text-[#5B6360]
                                        "
                                    >
                                        ₹
                                        {category.amount
                                            .toLocaleString()}
                                    </p>

                                </div>


                                <span
                                    className="
                                    font-medium
                                    text-[#1C2321]
                                    "
                                >
                                    {category.percentage}%
                                </span>

                            </div>

                        ))

                    }

                </div>

            </div>

        </div>

    );

};
