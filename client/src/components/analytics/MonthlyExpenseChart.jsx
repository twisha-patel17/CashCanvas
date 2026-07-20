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

                <LineChart data={data}>

                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#3A3A3A"
                    />

                    <XAxis
                        dataKey="month"
                        tick={{
                            fill: "#5B6360",
                            fontSize:12,
                        }}
                        axisLine={{
                            stroke: "#DCD6D7",
                        }}
                    />

                    <YAxis
                        tick={{
                            fill: "#5B6360",
                            fontSize:12,
                        }}
                        axisLine={{
                            stroke: "#DCD6D7",
                        }} 
                    />

                    <Tooltip

contentStyle={{

    backgroundColor:"#1F1F1F",

    border:"1px solid #3A3A3A",

    borderRadius:"12px",

}}

labelStyle={{

    color:"#FFFFFF",

}}

itemStyle={{

    color:"#FFFFFF",

}}

/>

                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#2D5A4A"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                        activeDot={{ r: 7 }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    );
};