export const TopSpendingCategories = ({ data }) => {

    return (

        <div className="space-y-4">

            {data.map((category) => (

                <div
                    key={category.category}
                    className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#F1EEE6]
                    dark:border-[#3A3A3A]
                    pb-4
                    "
                >

                    <div className="flex items-center gap-3">

                        <span className="text-2xl">
                            {category.emoji}
                        </span>


                        <p
                            className="
                            text-lg
                            font-medium
                            text-[#1C2321]
                            dark:text-white
                            "
                        >
                            {category.category}
                        </p>

                    </div>


                    <p
                        className="
                        text-lg
                        font-semibold
                        text-[#1C2321]
                        dark:text-white
                        "
                    >
                        ₹{category.amount}
                    </p>

                </div>

            ))}

        </div>

    );

};