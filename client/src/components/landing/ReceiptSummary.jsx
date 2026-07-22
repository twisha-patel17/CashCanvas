export const ReceiptSummary = () => {
  return (
    <div
      className="
        max-w-xs
        sm:max-x-sm
        mx-auto
        mt-8
        bg-white
        border border-[#DCD6C7]
        px-5
        py-4.5
        text-left
        font-['IBM_Plex_Mono']
        text-[12px]
        rotate-0
        sm:rotate-[-1.5deg]
        shadow-[0_12px_30px_-12px_rgba(28,35,33,0.25)]
        dark:border-[#323232]
        dark:bg-[#1A1A1A]
        dark:text-white
        dark:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.55)]
      "
    >
      <div className="text-center font-semibold mb-2 font-['Inter'] dark:text-white">
        JULY — SUMMARY
      </div>

      <hr className="border-0 border-t border-dashed border-[#DCD6C7] my-2 dark:border-[#3A3A3A]" />

      <div className="flex justify-between my-1">
        <span className="font-['Inter'] text-[#1C2321] dark:text-[#E5E5E5]">Income</span>
        <span className="text-[#3E8E7E] dark:text-[#4DB59F]">+₹64,000</span>
      </div>

      <div className="flex justify-between my-1">
        <span className="font-['Inter']">Rent</span>
        <span className="text-[#C1633D] dark:text-[#E27952]">-₹18,000</span>
      </div>

      <div className="flex justify-between my-1">
        <span className="font-['Inter']">Groceries</span>
        <span className="text-[#C1633D] dark:text-[#E27952]">-₹6,240</span>
      </div>

      <div className="flex justify-between my-1">
        <span className="font-['Inter']">Transit</span>
        <span className="text-[#C1633D] dark:text-[#E27952]">-₹2,100</span>
      </div>

      <hr className="border-0 border-t border-dashed border-[#DCD6C7] my-2" />

      <div className="flex justify-between my-1 font-bold dark:text-white">
        <span className="font-['Inter']">Balance</span>
        <span>₹37,660</span>
      </div>
    </div>
  )
}
