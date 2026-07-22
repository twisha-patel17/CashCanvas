import { FiPlus, FiMenu } from "react-icons/fi";

export const TransactionsTopbar = ({
  onAddTransaction, setIsSidebarOpen
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#DCD6C7] dark:border-[#3A3A3A] gap-4 bg-white dark:bg-[#1F1F1F] px-5 sm:px-8 py-5">

      <div className="flex items-center gap-4">

<button
onClick={()=>
setIsSidebarOpen(true)
}
className="
lg:hidden
text-2xl
text-[#1C2321]
dark:text-white
"
>
<FiMenu/>
</button>

<h1
className="
text-2xl
sm:text-3xl
font-bold
text-[#1C2321]
dark:text-white
"
>
Transactions
</h1>

</div>

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
