export const TransactionTable = ({
  openDeleteModal, openEditModal, transactions, openReceiptModal
}) => {

  return (

    <div className="overflow-hidden rounded-2xl border border-[#DCD6C7] bg-white shadow-sm">

      {/* Table Header */}

      <div className="grid grid-cols-6 border-b border-[#DCD6C7] bg-[#FAF9F5] px-6 py-4 text-sm font-semibold text-[#5B6360]">

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
          className="grid grid-cols-6 items-center border-b border-[#F1EEE6] px-6 py-5 text-[#1C2321]"
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

    {

        transaction.category ? (

            <>

            <span>

                {
                    transaction.category.emoji
                }

            </span>


            <span>

                {
                    transaction.category.name
                }

            </span>

            </>

        )

        :

        (

            <span
            className="
            text-sm
            italic
            text-[#5B6360]
            "
            >

                (Category Deleted)

            </span>

        )

    }

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

          <p>
            {transaction.paymentMethod}
          </p>


          {/* Actions */}

          <div className="flex justify-end gap-3">

            <button

            onClick={() => {
              openReceiptModal(transaction.receipt);
            }}

className="
text-sm
font-medium
text-[#2D5A4A]
transition
hover:underline
"

>

View

</button>

            <button onClick={()=>
        openEditModal(
            transaction
        )
    }

              className="text-sm font-medium text-[#2D5A4A] transition hover:underline"
            >
              Edit
            </button>

            <button
    onClick={() =>
        openDeleteModal(transaction._id)
    }
    className="
    text-sm
    font-medium
    text-[#C1633D]
    transition
    hover:underline
    "
>
  Delete
</button>
          </div>

        </div>

      ))}

    </div>
  );
};
