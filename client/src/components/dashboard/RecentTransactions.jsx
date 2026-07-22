import { Link } from "react-router-dom";

export const RecentTransactions = ({ transactions = []}) => {
  return(
    <div className="rounded-2xl border border-[#DCD6C7] dark:border-[#3A3A3A] bg-white dark:bg-[#1F1F1F] p-5">
  {/* Header */}
  <div className="flex items-center justify-between">
    <h2 className="text-[15px] font-semibold text-[#1C2321] dark:text-white">
      Recent Transactions
    </h2>

    <Link  to="/transactions" className="text-sm font-medium text-[#2D5A4A] dark:text-[#7BC3AF] hover:underline">
      View All →
    </Link>
  </div>

  {/* Transactions */}
  <div className="mt-6 space-y-4 overflow-x-auto">

    {transactions.map((transaction) => (
      <div
        key={transaction._id}
        className="min-w-[320px] flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-[#F8F6F2] dark:hover:bg-[#292929]"
      >
        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Emoji */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F5F5] dark:bg-[#303030] text-xl">
            {transaction.category.emoji}
          </div>

          {/* Title + Date */}
          <div>
            <h3 className="text-[14px] font-medium text-[#1C2321] dark:text-white">
              {transaction.category?.name || "Unknown Category"}
            </h3>

            <p className="mt-1 text-xs text-[#201f1f] dark:text-[#A1A1AA]">
              {
                new Date(transaction.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              }
            </p>
          </div>

        </div>

        {/* Amount */}
        <span className={`font-mono text-[14px] font-medium ${
  transaction.type === "income"
    ? "text-[#3E8E7E]"
    : "text-[#C1633D]"
}`}>
          {transaction.type === "income"
           ? `+₹${transaction.amount.toLocaleString()}`
           : `-₹${transaction.amount.toLocaleString()}`}
        </span>
      </div>
    ))}

  </div>
</div>
  )
};