import { useCategory } from "../../../../../../../hooks/useCategory";
import { Container, Icon } from "./styles";
import React, { useEffect, useRef, useState } from "react";

type NewCategoryProps = {
  isShowed: boolean;
  setIsShowed: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

function NewCategory({ isShowed, setIsShowed, category, setCategory }: NewCategoryProps) {
  const { createCategory } = useCategory();
  const inputRef = useRef(null);

  function handleCreateCategory() {
    if (category.trim() !== "") {
      setCategory("");
      setIsShowed(false);
      createCategory(category);
    }
  }

  useEffect(() => {
    if (isShowed) {
      const input = inputRef.current as HTMLInputElement | null;
      if (input !== null) input.focus();
    }
  }, [isShowed]);

  return (
    <Container isShowed={isShowed}>
      <input
        ref={inputRef}
        value={category}
        onChange={(event) => {
          setCategory(event.currentTarget.value);
        }}
        onKeyUp={({ key }) => key === "Enter" && handleCreateCategory}
        type="text"
      />
      <button onClick={handleCreateCategory}>
        <Icon />
      </button>
    </Container>
  );
}

export { NewCategory };
