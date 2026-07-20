import { useEffect, useState } from "react";
import { getCategories, createCategory, deleteCategory } from "../api/categoryApi";

import { CategoryTopbar } from "../components/categories/CategoryTopbar";
import { SearchCategory } from "../components/categories/SearchCategory";
import { CategoryCard } from "../components/categories/CategoryCard";
import { AddCategoryModal } from "../components/categories/AddCategoryModal";

export const CategoriesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const [categories, setCategories] = useState([
    
  ]);

  const handleAddCategory = async (newCategory) => {
  try {
    await createCategory(newCategory);

    await loadCategories();

    setIsModalOpen(false);
  } catch (error) {
    console.error("Error creating category:", error);

    if (error.response && error.response.data) {
      alert(error.response.data.message);
    } else {
      alert("An error occurred while creating the category.");
    }
  }
};

  const handleDeleteCategory = async (id) => {
    try {
      await deleteCategory(id);

      await loadCategories();
    } catch (error) {
      console.error(error);

      if(error.response?.data?.message){
          alert(error.response.data.message);
     }
    }
  }

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(textSearch.toLowerCase())
  );

  const loadCategories = async () => {
    const data = await getCategories();

    setCategories(data);
}
 useEffect(() => {
    loadCategories();
}, []);

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
          <div className="grid grid-cols-3 gap-5 ">
            {filteredCategories.map((category) => (
              <CategoryCard
                key={category._id}
                category={category}
                onDelete={handleDeleteCategory}
              />
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-[#7A7A7A] dark:text-[#B0B0B0]">
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