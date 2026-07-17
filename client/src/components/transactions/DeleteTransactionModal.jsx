export const DeleteTransactionModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      {/* Modal */}

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        {/* Heading */}

        <h2 className="text-2xl font-bold text-[#1C2321] text-center">
          Delete Transaction?
        </h2>


        {/* Message */}

        <p className="mt-4 text-center text-[#5B6360]">
          Are you sure you want to delete this transaction?
        </p>

        <p className="mt-2 text-center text-sm text-red-600">
          This action cannot be undone.
        </p>


        {/* Buttons */}

        <div className="mt-8 flex justify-center gap-4">

          <button
            className="
            rounded-xl
            border
            border-[#DCD6C7]
            px-6
            py-3
            transition
            hover:bg-[#F7F5EF]
            "
          >
            Cancel
          </button>


          <button
            className="
            rounded-xl
            bg-red-600
            px-6
            py-3
            text-white
            transition
            hover:bg-red-700
            "
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};