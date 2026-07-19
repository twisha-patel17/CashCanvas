import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    Tooltip,
} from "recharts";

export const MonthlyExpenseChart = ({

    weeklyExpenses = [],

}) => {

    const currentMonth =

        new Date().toLocaleString(

            "default",

            {

                month: "long",

                year: "numeric",

            }

        );


    const chartData =

        weeklyExpenses.map((day) => ({

            day:

            new Date(day.date)

                .getDate()

                .toString(),

            amount:

            day.amount,

        }));



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

            <div
                className="
                mb-6
                "
            >

                <h2
                    className="
                    text-[15px]
                    font-semibold
                    text-[#1C2321]
                    "
                >
                    Monthly Expense
                </h2>


                <p
                    className="
                    mt-1
                    text-xs
                    text-[#5B6360]
                    "
                >
                    Last 7 Days • {currentMonth}
                </p>

            </div>



            <div
                className="
                h-55
                "
            >

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <AreaChart
                        data={chartData}
                    >

                        <defs>

                            <linearGradient
                                id="expenseGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >

                                <stop
                                    offset="0%"
                                    stopColor="#2D5A4A"
                                    stopOpacity={0.5}
                                />

                                <stop
                                    offset="100%"
                                    stopColor="#2D5A4A"
                                    stopOpacity={0}
                                />

                            </linearGradient>

                        </defs>


                        <XAxis

                            dataKey="day"

                            axisLine={false}

                            tickLine={false}

                            tick={{
                                fill:"#5B6360",
                                fontSize:12,
                            }}

                        />


                        <Tooltip />


                        <Area

                            type="monotone"

                            dataKey="amount"

                            stroke="#2D5A4A"

                            strokeWidth={3}

                            fill="url(#expenseGradient)"

                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

};
