import { FiPlus } from "react-icons/fi";

export const TransactionsTopbar = ({
  onAddTransaction,
}) => {
  return (
    <div className="flex items-center justify-between border-b border-[#DCD6C7] dark:border-[#3A3A3A] bg-white dark:bg-[#1F1F1F] px-8 py-5">

      <h1 className="text-3xl font-bold text-[#1C2321] dark:text-white">
        Transactions
      </h1>

      <button
        onClick={onAddTransaction}
        className="flex items-center gap-2 rounded-xl bg-[#2D5A4A] px-5 py-3 text-white transition hover:bg-[#23483A]"
      >
        <FiPlus />
        Add Transaction
      </button>

    </div>
  );
};
