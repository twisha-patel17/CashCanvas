export const ReceiptSummary = () => {
  return (
    <div
      className="
        max-w-57.5
        mx-auto
        mt-6
        bg-white
        border border-[#DCD6C7]
        px-5
        py-4.5
        text-left
        font-['IBM_Plex_Mono']
        text-[12px]
        shadow-[0_12px_30px_-12px_rgba(28,35,33,0.25)]
        rotate-[-1.5deg]
      "
    >
      <div className="text-center font-semibold mb-2 font-['Inter']">
        JULY — SUMMARY
      </div>

      <hr className="border-0 border-t border-dashed border-[#DCD6C7] my-2" />

      <div className="flex justify-between my-1">
        <span className="font-['Inter']">Income</span>
        <span className="text-[#3E8E7E]">+₹64,000</span>
      </div>

      <div className="flex justify-between my-1">
        <span className="font-['Inter']">Rent</span>
        <span className="text-[#C1633D]">-₹18,000</span>
      </div>

      <div className="flex justify-between my-1">
        <span className="font-['Inter']">Groceries</span>
        <span className="text-[#C1633D]">-₹6,240</span>
      </div>

      <div className="flex justify-between my-1">
        <span className="font-['Inter']">Transit</span>
        <span className="text-[#C1633D]">-₹2,100</span>
      </div>

      <hr className="border-0 border-t border-dashed border-[#DCD6C7] my-2" />

      <div className="flex justify-between my-1 font-bold">
        <span className="font-['Inter']">Balance</span>
        <span>₹37,660</span>
      </div>
    </div>
  )
}
