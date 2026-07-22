import { FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

export const AddTransactionModal = ({
  mode = "add",
  onClose,
  onSubmit,
  categories,
  transaction = null,
}) => {
  const [formData, setFormData] = useState({
    amount: "",
    type: "",
    category: "",
    date: "",
    paymentMethod: "",
    description: "",
    receipt: "",
  });

  useEffect(() => {
    if (mode === "edit" && transaction) {
      setFormData({
        amount: transaction.amount,
        type: transaction.type,
        category: transaction.category._id,
        date: transaction.date?.split("T")[0] || "",
        paymentMethod: transaction.paymentMethod,
        description: transaction.description,
        receipt: "",
      });
    }
  }, [transaction, mode]);

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
    if (mode === "edit") {
      await onSubmit(transaction._id, formData);
    } else {
      await onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="mx-4 max-h-[90vh] overflow-y-auto w-full max-w-4xl rounded-2xl bg-white p-8 shadow-xl dark:bg-[#1F1F1F]">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-[#1C2321] dark:text-white">
            {mode === "add" ? "Add Transaction" : "Edit Transaction"}
          </h2>

          <button onClick={onClose}>
            <FiX
              size={28}
              className="text-[#5B6360] transition hover:text-black dark:text-[#A1A1AA] dark:hover:text-white"
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
            className="w-full rounded-xl border border-[#DCD6C7] px-4 py-3 text-[#1C2321] outline-none focus:border-[#2D5A4A] dark:border-[#3A3A3A] dark:text-white"
          />

          {/* Type + Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mode === "add" ? (
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="rounded-xl border border-[#DCD6C7] px-4 py-3 text-[#1C2321] outline-none focus:border-[#2D5A4A] dark:bg-[#1F1F1F] dark:border-[#3A3A3A] dark:text-white"
              >
                <option value="">Select Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            ) : (
              <input
                value={formData.type}
                disabled
                className="rounded-xl border border-[#DCD6C7] px-4 py-3 text-[#1C2321] dark:border-[#3A3A3A] dark:text-white"
              />
            )}

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="rounded-xl border border-[#DCD6C7] px-4 py-3 outline-none focus:border-[#2D5A4A] dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-white"
            />
          </div>

          {/* Category + Payment Method */}
          <div className="grid grid-cols-2 gap-4">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="rounded-xl border border-[#DCD6C7] px-4 py-3 outline-none focus:border-[#2D5A4A] dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-white"
            >
              <option value="">Select Category</option>

              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.emoji} {category.name}
                </option>
              ))}
            </select>

            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="rounded-xl border border-[#DCD6C7] px-4 py-3 outline-none focus:border-[#2D5A4A] dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-white"
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
          {mode === "add" && (
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full rounded-xl border border-[#DCD6C7] px-4 py-3 dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-white"
            />
          )}

          {/* Description */}
          <textarea
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description (Optional)"
            className="w-full rounded-xl border border-[#DCD6C7] px-4 py-3 outline-none focus:border-[#2D5A4A] dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-white"
          />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-xl border border-[#DCD6C7] px-6 py-3 transition dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#2D5A4A] px-6 py-3 text-white transition hover:bg-[#23483A]"
          >
            {mode === "add" ? "Add Transaction" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};
