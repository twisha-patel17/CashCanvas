export const ViewReceiptModal = ({ receipt, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full mx-4 max-h-[90vh] overflow-y-auto max-w-2xl rounded-2xl bg-white p-6 shadow-xl dark:bg-[#1F1F1F]">
        <h2 className="text-2xl font-bold text-[#1C2321] dark:text-white">
          Receipt
        </h2>

        <img
          src={receipt}
          alt="Receipt"
          className="mt-6 max-h-125 w-full rounded-xl object-contain"
        />

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-[#2D5A4A] px-6 py-3 text-white transition hover:bg-[#23483A]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};