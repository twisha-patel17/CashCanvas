export const TopSpendingCategories = ({

    topCategories = [],

}) => {

    return (

        <div className="rounded-2xl border border-[#DCD6C7] bg-white p-5">

            <h2 className="text-[15px] font-semibold text-[#1C2321]">
                Top Spending Categories
            </h2>


            <div className="mt-6 space-y-4">

                {

                    topCategories.map((category) => (

                        <div
                            key={category.category}
                            className="flex items-center justify-between"
                        >

                            <div className="flex items-center gap-3">

                                <span
                                    className="h-3 w-3 rounded-full"
                                    style={{
                                        backgroundColor:
                                        category.color,
                                    }}
                                />

                                <span className="text-sm font-medium text-[#1C2321]">

                                    {category.category}

                                </span>

                            </div>


                            <span className="text-sm text-[#1C2321]">

                                ₹
                                {category.amount.toLocaleString()}

                            </span>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};
