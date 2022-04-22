import { CategoryContext } from "../contexts/CategoryContext";
import { useContext } from "react";

export function useCategory() {
  const context = useContext(CategoryContext);
  return context;
}
