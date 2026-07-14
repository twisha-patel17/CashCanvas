import { useState } from "react";

import { CategoryTopbar } from "../components/categories/CategoryTopbar";
import { SearchCategory } from "../components/categories/SearchCategory";
import { CategoryCard } from "../components/categories/CategoryCard";
import { AddCategoryModal } from "../components/categories/AddCategoryModal";

export const CategoriesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Food",
      emoji: "🍕",
      color: "#2D5A4A",
      type: "expense",
      monthlyBudget: 10000,
      transactionCount: 42,
    },
    {
      id: 2,
      name: "Shopping",
      emoji: "🛍️",
      color: "#B8934A",
      type: "expense",
      monthlyBudget: 5000,
      transactionCount: 18,
    },
  ]);

  const handleAddCategory = (newCategory) => {
    setCategories((prevCategories) => [
      ...prevCategories,
      {
        id: Date.now(),
        ...newCategory,
      },
    ]);

    setIsModalOpen(false);
  };

  const handleDeleteCategory = (id) => {
    setCategories((prevCategories) => prevCategories.filter((category) => category.id !== id));
  }

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(textSearch.toLowerCase())
  );

  return (
    <>
      <CategoryTopbar
        onAddCategory={() => setIsModalOpen(true)}
      />

      <div className="space-y-6 p-8">

        <SearchCategory
          textSearch={textSearch}
          setTextSearch={setTextSearch}
        />

        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-3 gap-5">
            {filteredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onDelete={handleDeleteCategory}
              />
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-[#7A7A7A]">
            No categories found.
          </p>
        )}

      </div>

      {isModalOpen && (
        <AddCategoryModal
          onClose={() => setIsModalOpen(false)}
          onAddCategory={handleAddCategory}
        />
      )}
    </>
  );
};