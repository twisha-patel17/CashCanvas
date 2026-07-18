import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";


export const ExpenseDistributionChart = ({ data }) => {

    return (

        <div className="h-72">

            <ResponsiveContainer
                width="100%"
                height="100%"
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="amount"
                        nameKey="category"
                        outerRadius={90}
                        fill="#2D5A4A"
                    >

                        {data.map((entry,index)=>(

                        <Cell
                        key={index}
                        fill={entry.color}
                        />

                        ))}

                    </Pie>


                    <Tooltip
                         formatter={(value, name) => [
                         `₹${value}`,
                          name,
                        ]}
                     />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

};