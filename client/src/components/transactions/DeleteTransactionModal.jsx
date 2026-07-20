import { deleteTransaction } from "../../api/transactionApi";
import { useState } from "react";

export const DeleteTransactionModal = ({transactionId,
    onClose, onDelete}) => {

      const [isDeleting,setIsDeleting] = useState(false);

   const handleDelete = async()=>{

    try{

        setIsDeleting(true);

        await deleteTransaction(
            transactionId
        );

        await onDelete();

        onClose();

    }

    catch(error){

        console.error(error);

    }

    finally{

        setIsDeleting(false);

    }

};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      {/* Modal */}

      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-[#1F1F1F] p-8 shadow-xl">

        {/* Heading */}

        <h2 className="text-2xl font-bold text-[#1C2321] dark:text-white text-center">
          Delete Transaction?
        </h2>


        {/* Message */}

        <p className="mt-4 text-center text-[#5B6360] dark:text-[#A1A1AA]">
          Are you sure you want to delete this transaction?
        </p>

        <p className="mt-2 text-center text-sm text-red-600 dark:text-red-500">
          This action cannot be undone.
        </p>


        {/* Buttons */}

        <div className="mt-8 flex justify-center gap-4">

          <button
            onClick={onClose}
            className="
            rounded-xl
border
border-[#DCD6C7]
dark:border-[#3A3A3A]
bg-white
dark:bg-[#1F1F1F]
px-6
py-3
text-[#1C2321]
dark:text-white
transition
hover:bg-[#F7F5EF]
dark:hover:bg-[#292929]
            "
          >
            Cancel
          </button>


          <button
    onClick={handleDelete}
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

    {isDeleting
        ? "Deleting..."
        : "Delete"}

</button>

        </div>

      </div>

    </div>
  );
};