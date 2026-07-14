import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

export const AddCategoryModal = ({onClose, onAddCategory}) => {
  const colors = [
    "#2D5A4A",
    "#3E8E7E",
    "#B8934A",
    "#C1633D",
    "#5A67D8",
    "#8B5CF6",
    "#EC4899",
    "#14B8A6",
    "#F97316",
    "#84CC16",
    "#DC2626",
    "#2563EB",
    "#7C3AED",
    "#10B981",
    "#F59E0B",
    "#6366F1",
    "#06B6D4",
    "#A855F7",
    "#E11D48",
    "#4B5563",
  ];

  const [categoryName, setCategoryName] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [selectedColor, setSelectedColor] = useState("#2D5A4A");
  const [categoryType, setCategoryType] = useState("Expense");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [budget, setBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoryName.trim()) {
      alert("Please enter a category name.");
      return;
    }

    if (Number(budget) < 0) {
   alert("Budget cannot be negative");
   return;
}

    const category = {
      name: categoryName,
      emoji: selectedEmoji || "📂",
      color: selectedColor,
      type: categoryType,
      monthlyBudget: Number(budget),
      transactionCount: 0,
    };

    onAddCategory(category);

    // Reset Form
    setCategoryName("");
    setSelectedEmoji("");
    setSelectedColor("#2D5A4A");
    setCategoryType("Expense");
    setBudget("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-115 rounded-3xl bg-white p-6 shadow-2xl">

        <h2 className="text-2xl font-bold text-[#1C2321]">
          Add Category
        </h2>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">

          {/* Category Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#1C2321]">
              Category Name
            </label>

            <input
              type="text"
              placeholder="e.g. Food"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full rounded-xl border border-[#DCD6C7] px-4 py-2.5 outline-none focus:border-[#2D5A4A]"
            />
          </div>

          {/* Emoji */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#1C2321]">
              Emoji
            </label>

          <div className="relative">
            

            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="flex h-12 w-full items-center justify-center rounded-xl border border-[#DCD6C7] text-2xl transition hover:border-[#2D5A4A]"
            >
              {selectedEmoji || "😊 Choose Emoji"}
            </button>

            {showEmojiPicker && (
              <div className="absolute z-50 mt-2">
                <EmojiPicker
                  onEmojiClick={(emoji) => {
                    setSelectedEmoji(emoji.emoji);
                    setShowEmojiPicker(false);
                  }}
                  />
                  </div>
            )}
          </div>  

          </div>

          {/* Colors */}
          <div>
            <label className="mb-3 block text-sm font-medium text-[#1C2321]">
              Color
            </label>

            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`h-8 w-8 rounded-full ${
                    selectedColor === color
                      ? "ring-2 ring-offset-2 ring-[#1C2321]"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Type */}
          <div>
            <label className="mb-3 block text-sm font-medium text-[#1C2321]">
              Type
            </label>

            <div className="flex gap-3">

              <button
                type="button"
                onClick={() => setCategoryType("Expense")}
                className={`flex-1 rounded-xl py-2.5 font-medium ${
                  categoryType === "Expense"
                    ? "bg-[#2D5A4A] text-white"
                    : "border border-[#DCD6C7] text-[#1C2321]"
                }`}
              >
                Expense
              </button>

              <button
                type="button"
                onClick={() => setCategoryType("Income")}
                className={`flex-1 rounded-xl py-2.5 font-medium ${
                  categoryType === "Income"
                    ? "bg-[#2D5A4A] text-white"
                    : "border border-[#DCD6C7] text-[#1C2321]"
                }`}
              >
                Income
              </button>

            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#1C2321]">
              Monthly Budget
            </label>

            <input
              type="number"
              placeholder="₹ 10,000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full rounded-xl border border-[#DCD6C7] px-4 py-3 outline-none focus:border-[#2D5A4A]"
            />
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[#DCD6C7] px-6 py-2.5 font-medium text-[#1C2321] hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-[#2D5A4A] px-6 py-2.5 font-medium text-white hover:bg-[#23483A]"
            >
              Save Category
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};