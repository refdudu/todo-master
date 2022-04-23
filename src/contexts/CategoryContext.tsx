import { createContext, ReactNode, useEffect, useState } from "react";
import { Category } from "../@types/CategoryType";

type CategoryContextProps = {
  categories: Category[];
  createCategory: (label: string) => Category | void;
};

export const CategoryContext = createContext(
  {} as CategoryContextProps
);

type CategoriesProviderProps = {
  children: ReactNode;
};
export function CategoryProvider({
  children,
}: CategoriesProviderProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  function createCategory(label: string) {
    const indexData = localStorage.getItem("category_index");
    if (indexData) {
      const index = parseInt(indexData);

      localStorage.setItem("category_index", `${index + 1}`);
      const category: Category = {
        label,
        value: index + 1,
      };
      setCategories((p) => [...p, category]);
      return category;
    }
  }
  function getCategories(): Category[] | void {
    const categories = localStorage.getItem("categories");
    if (categories) {
      const parsedCategories = JSON.parse(categories);
      return parsedCategories;
    }
  }

  useEffect(() => {
    if (categories.length === 0) {
      const categories = getCategories();
      if (categories) {
        setCategories(categories);
      }
    } else {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  useEffect(() => {
    const index = localStorage.getItem("category_index");

    if (!index) {
      localStorage.setItem("category_index", "0");
    }
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, createCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
