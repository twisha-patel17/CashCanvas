export const ExpenseChart = () => {

  const categories = [
  {
    name: "Food",
    percentage: 35,
    color: "#2D5A4A",
  },
  {
    name: "Bills",
    percentage: 23,
    color: "#3E8E7E",
  },
  {
    name: "Shopping",
    percentage: 20,
    color: "#B8934A",
  },
  {
    name: "Travel",
    percentage: 22,
    color: "#C1633D",
  },
];

  return (
    <div className="bg-white border border-[#DCD6C7] rounded-2xl p-5">
      <h2 className="text-[15px] font-semibold text-[#1C2321]">
        Expense by Category
      </h2>

      <div className="mt-8 flex items-center justify-center gap-12">
  {/* Donut */}
  <div className="relative h-37.5 w-37.5 rounded-full bg-[conic-gradient(#2D5A4A_0%_35%,#3E8E7E_35%_58%,#B8934A_58%_78%,#C1633D_78%_100%)]">
    <div className="absolute inset-6.5 rounded-full bg-white"></div>
  </div>

  {/* Legend */}
  <div className="space-y-4">
    {categories.map((category) => (
      <div
        key={category.name}
        className="flex items-center justify-between gap-8"
      >
        <div className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: category.color }}
          ></span>

          <p className="text-sm text-[#1C2321]">
            {category.name}
          </p>
        </div>

        <span className="font-medium text-[#1C2321]">
          {category.percentage}%
        </span>
      </div>
    ))}
  </div>
</div>
</div>
  );
};
