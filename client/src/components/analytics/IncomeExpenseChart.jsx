import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";


export const IncomeExpenseChart = ({ data }) => {

    return (

        <div className="h-72">

            <ResponsiveContainer
                width="100%"
                height="100%"
            >

                <LineChart
                    data={data}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />


                    <XAxis
                        dataKey="month"
                    />


                    <YAxis />


                    <Tooltip />


                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#3E8E7E"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                        activeDot={{ r: 7 }}
                    />


                    <Line
                        type="monotone"
                        dataKey="expense"
                        stroke="#C1633D"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                        activeDot={{ r: 7 }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

};