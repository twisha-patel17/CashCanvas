export const TopSpendingCategories = () => {

  const categories = [
    {
      name: "Food",
      amount: 8400,
      color: "#2D5A4A",
    },
    {
      name: "Shopping",
      amount: 6120,
      color: "#B8934A",
    },
    {
      name: "Travel",
      amount: 4900,
      color: "#C1633D",
    },
    {
      name: "Bills",
      amount: 3200,
      color: "#3E8E7E",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#DCD6C7] bg-white p-5">
      <h2 className="text-[15px] font-semibold text-[#1C2321]">
        Top Spending Categories
      </h2>

      <div className="mt-6 space-y-4">
        {categories.map((category) => (
          <div key={category.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: category.color}}></span>

              <span className="text-sm font-medium text-[#1C2321]">
                {category.name}
              </span>
            </div>

            <span className="text-mono text-sm text-[#1C2321]">
            ₹{category.amount.toLocaleString()}</span>
            </div>  
        ))}
      </div>

    </div>
  )
}
