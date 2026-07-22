export const TransactionTable = ({
  openDeleteModal,
  openEditModal,
  transactions,
  openReceiptModal,
}) => {
  return (
    <>
      <div className="hidden lg:block overflow-hidden rounded-2xl border border-[#DCD6C7] bg-white shadow-sm dark:border-[#3A3A3A] dark:bg-[#1F1F1F]">
        {/* Table Header */}
      <div className="grid grid-cols-6 border-b border-[#DCD6C7] bg-[#FAF9F5] px-6 py-4 text-sm font-semibold text-[#5B6360] dark:border-[#3A3A3A] dark:bg-[#292929]">
        <p>Date</p>
        <p>Category</p>
        <p>Amount</p>
        <p>Status</p>
        <p>Payment</p>
        <p className="text-right">Actions</p>
      </div>

      {/* Transaction Rows */}
      {transactions.map((transaction) => (
        <div
          key={transaction._id}
          className="grid grid-cols-6 items-center border-b border-[#F1EEE6] px-6 py-5 text-[#1C2321] dark:border-[#303030] dark:text-white"
        >
          {/* Date */}
          <p>
            {new Date(transaction.date).toLocaleDateString(
              "en-IN",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              }
            )}
          </p>

          {/* Category */}
          <p className="flex items-center gap-2">
            {transaction.category ? (
              <>
                <span>{transaction.category.emoji}</span>
                <span>{transaction.category.name}</span>
              </>
            ) : (
              <span className="text-sm italic text-[#5B6360] dark:text-[#A1A1AA]">
                (Category Deleted)
              </span>
            )}
          </p>

          {/* Amount */}
          <p
            className={`font-semibold ${
              transaction.type === "income"
                ? "text-[#3E8E7E]"
                : "text-[#C1633D]"
            }`}
          >
            {transaction.type === "income" ? "+" : "-"}₹
            {transaction.amount}
          </p>

          {/* Status */}
          <p>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                transaction.status === "cleared"
                  ? "bg-green-100 text-green-700"
                  : transaction.status === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {transaction.status}
            </span>
          </p>

          {/* Payment Method */}
          <p>{transaction.paymentMethod}</p>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <button
disabled={!transaction.receipt}
onClick={() =>
openReceiptModal(transaction.receipt)
}
className={`
flex-1 rounded-xl py-2 text-white
${transaction.receipt
? "bg-[#2D5A4A]"
: "bg-gray-400 cursor-not-allowed"}
`}
>
View
</button>

            <button
              onClick={() => openEditModal(transaction)}
              className="text-sm font-medium text-[#2D5A4A] transition hover:underline dark:text-[#6FB7A1]"
            >
              Edit
            </button>

            <button
              onClick={() =>
                openDeleteModal(transaction._id)
              }
              className="text-sm font-medium text-[#C1633D] transition hover:underline dark:text-[#E07A5F]"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      </div>

      {/* Mobile Cards */}

<div className="space-y-4 lg:hidden">
  {transactions.map((transaction) => (
    <div
      key={transaction._id}
      className="
      rounded-2xl border border-[#DCD6C7]
      bg-white p-5
      dark:border-[#3A3A3A]
      dark:bg-[#1F1F1F]
      "
    >
      {/* Top Row */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">

          <span className="text-xl">
            {transaction.category?.emoji}
          </span>

          <p className="font-semibold text-[#1C2321] dark:text-white">
            {transaction.category?.name ||
              "(Category Deleted)"}
          </p>

        </div>

        <p
          className={`font-semibold ${
            transaction.type === "income"
              ? "text-[#3E8E7E]"
              : "text-[#C1633D]"
          }`}
        >
          {transaction.type === "income"
            ? "+"
            : "-"}
          ₹{transaction.amount}
        </p>
      </div>

      {/* Date */}

      <p className="mt-3 text-sm text-[#5B6360] dark:text-[#A1A1AA]">
        {new Date(
          transaction.date
        ).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>

      {/* Status */}

      <div className="mt-4 flex items-center justify-between">

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            transaction.status === "cleared"
              ? "bg-green-100 text-green-700"
              : transaction.status === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {transaction.status}
        </span>

        <span className="text-sm text-[#5B6360] dark:text-[#A1A1AA]">
          {transaction.paymentMethod}
        </span>

      </div>

      {/* Buttons */}

      <div className="mt-5 flex gap-2">

        <button
disabled={!transaction.receipt}
onClick={() =>
openReceiptModal(transaction.receipt)
}
className={`
flex-1 rounded-xl py-2 text-sm text-white
${transaction.receipt
? "bg-[#2D5A4A]"
: "bg-gray-400 cursor-not-allowed"}
`}
>
View
</button>

        <button
          onClick={() =>
            openEditModal(transaction)
          }
          className="
          flex-1 rounded-xl
          border border-[#DCD6C7]
          py-2 dark:border-[#3A3A3A]
          "
        >
          Edit
        </button>

        <button
          onClick={() =>
            openDeleteModal(
              transaction._id
            )
          }
          className="
          flex-1 rounded-xl
          bg-red-500 py-2 text-white
          "
        >
          Delete
        </button>

      </div>
    </div>
  ))}
</div>
      
    </>
  );
};
