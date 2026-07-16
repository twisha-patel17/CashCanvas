import {

    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,

} from "recharts";


export const MonthlyExpenseChart = ({ data }) => {

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
                        dataKey="amount"
                        stroke="#2D5A4A"
                        strokeWidth={3}
                    />


                </LineChart>


            </ResponsiveContainer>


        </div>

    );

};