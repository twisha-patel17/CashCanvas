import { FiX } from "react-icons/fi";
import { useState } from "react"

export const AddTransactionModal = ({
  mode = "add",
  onClose, onSubmit, categories,
}) => {

  const [formData, setFormData] = useState({
    amount: "",
    type: "",
    category: "",
    date: "",
    paymentMethod: "",
    description: "",
    receipt: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      receipt: e.target.files[0],
    });
  };

  const handleSubmit = async () => {
    await onSubmit(formData);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      {/* Modal */}

      <div className="mx-4 w-full max-w-4xl rounded-2xl bg-white p-8 shadow-xl">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-[#1C2321]">

            {mode === "add"
              ? "Add Transaction"
              : "Edit Transaction"}

          </h2>

          <button onClick={onClose}>

            <FiX
              size={28}
              className="text-[#5B6360] transition hover:text-black"
            />

          </button>

        </div>


        {/* Form */}

        <div className="space-y-5">

          {/* Amount */}

          <input
            type="number"
            placeholder="Amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="
            w-full
            rounded-xl
            border
            border-[#DCD6C7]
            px-4
            py-3
            outline-none
            focus:border-[#2D5A4A]
            "
          />


          {/* Type + Date */}

          <div className="grid grid-cols-2 gap-4">

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="
              rounded-xl
              border
              border-[#DCD6C7]
              px-4
              py-3
              outline-none
              focus:border-[#2D5A4A]
              "
            >
              <option value="">Select Type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>


            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="
              rounded-xl
              border
              border-[#DCD6C7]
              px-4
              py-3
              outline-none
              focus:border-[#2D5A4A]
              "
            />

          </div>


          {/* Category + Payment Method */}

          <div className="grid grid-cols-2 gap-4">

            <select
    name="category"
    value={formData.category}
    onChange={handleChange}
    className="
    rounded-xl
    border
    border-[#DCD6C7]
    px-4
    py-3
    outline-none
    focus:border-[#2D5A4A]
    "
>

    <option value="">
        Select Category
    </option>

    {categories.map((category) => (

        <option
            key={category._id}
            value={category._id}
        >
            {category.name}
        </option>

    ))}

</select>


            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="
              rounded-xl
              border
              border-[#DCD6C7]
              px-4
              py-3
              outline-none
              focus:border-[#2D5A4A]
              "
            >
              <option value="">Select Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="UPI">UPI</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>

          </div>


          {/* Receipt */}

          <input
            placeholder="Receipt (Optional)"
            onChange={handleFileChange}
            type="file"
            className="
            w-full
            rounded-xl
            border
            border-[#DCD6C7]
            px-4
            py-3
            "
          />


          {/* Description */}

          <textarea
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description (Optional)"
            className="
            w-full
            rounded-xl
            border
            border-[#DCD6C7]
            px-4
            py-3
            outline-none
            focus:border-[#2D5A4A]
            "
          />

        </div>


        {/* Buttons */}

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
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
            onClick={handleSubmit}
            className="
            rounded-xl
            bg-[#2D5A4A]
            px-6
            py-3
            text-white
            transition
            hover:bg-[#23483A]
            "
          >

            {mode === "add"
              ? "Add Transaction"
              : "Save Changes"}

          </button>

        </div>

      </div>

    </div>
  );
};