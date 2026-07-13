import { useState } from "react";

import { CategoryTopbar } from "../components/categories/CategoryTopbar";
import { SearchCategory } from "../components/categories/SearchCategory";
import { CategoryCard } from "../components/categories/CategoryCard";
import { AddCategoryModal } from "../components/categories/AddCategoryModal";

export const CategoriesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setCategories((prevCategories) => [...prevCategories, {
      id: Date.now(),
      ...newCategory,
    }]);

    setIsModalOpen(false);
  }

  return (
    <>
      <CategoryTopbar
        onAddCategory={() => setIsModalOpen(true)}
      />

      <div className="p-8 space-y-6">

        <SearchCategory />

        <div className="grid grid-cols-3 gap-5">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

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