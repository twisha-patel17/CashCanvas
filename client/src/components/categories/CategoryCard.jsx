import { FiTrash2 } from "react-icons/fi";

export const CategoryCard = ({ category, onDelete }) => {
  return (
    <div className="rounded-2xl border border-[#DCD6C7] bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
          style={{ borderLeft: `6px solid ${category.color}` }}
        >
          {category.emoji}
        </div>

        <button
          onClick={() => onDelete(category._id)}
          className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
        >
          <FiTrash2 size={18} />
        </button>

      </div>

      {/* Name */}
      <h2 className="mt-4 text-xl font-semibold text-[#1C2321]">
        {category.name}
      </h2>

      {/* Type */}
      <span
        className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
          category.type === "income"
            ? "bg-[#EAF7F3] text-[#3E8E7E]"
            : "bg-[#FCEFEA] text-[#C1633D]"
        }`}
      >
        {category.type.charAt(0).toUpperCase() + category.type.slice(1)}
      </span>

      {/* Transactions */}
      <p className="mt-5 text-sm text-[#7A7A7A]">
        {category.transactionCount} Transactions
      </p>

      {/* Budget */}
      <div className="mt-4 flex items-center justify-between border-t border-[#ECE7DB] pt-4">
        <span className="text-sm text-[#7A7A7A]">
          Monthly Budget
        </span>

        <span className="font-semibold text-[#1C2321]">
          ₹{category.monthlyBudget.toLocaleString()}
        </span>
      </div>

    </div>
  );
};
