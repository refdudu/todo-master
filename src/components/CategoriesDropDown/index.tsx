import React, { FormEvent, useRef, useState } from "react";
import { Category } from "../../@types/CategoryType";
import { useCategory } from "../../hooks/useCategory";
import {
  Container,
  Title,
  List,
  Item,
  CreateNewCategory,
  CaretDownIcon,
  NewCategory,
  PlusIcon,
} from "./styles";

type CategoriesDropDownProps = {
  categories: Category[];
  setCategoryValue: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
};

function CategoriesDropDown({
  categories,
  setCategoryValue,
}: CategoriesDropDownProps) {
  const inputRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);
  const [isShowed, setIsShowed] = useState(false);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("Categorias");
  const { createCategory } = useCategory();

  function handleShowCreateNewCategory() {
    setIsShowed(true);
    setTimeout(() => {
      const input = inputRef.current as HTMLInputElement | null;
      if (input) {
        input.focus();
      }
    }, 100);
  }
  function handleCreateNewCategory() {
    if (category.trim() != "") {
      setCategory("");
      setIsShowed(false);
      const res = createCategory(category);
      if (res != undefined) {
        handleItemSelect({
          label: res.label,
          value: res.value,
        });
      }
    }
  }

  function handleSubmit(key: string) {
    if (key == "Enter") {
      handleCreateNewCategory();
    }
  }
  function handleItemSelect({ label, value }: Category) {
    setCategoryValue(value);
    setTitle(label);
    setIsOpened(false);
  }

  return (
    <Container
      onMouseLeave={() => setIsOpened(false)}
      onMouseEnter={() => setIsOpened(true)}
    >
      <Title>
        <span>{title}</span>
        <CaretDownIcon />
      </Title>
      <List isOpened={isOpened}>
        {categories.map(({ label, value }) => {
          return (
            <Item
              key={value}
              onClick={() => handleItemSelect({ label, value })}
              value={value}
            >
              {label}
            </Item>
          );
        })}
        <NewCategory isShowed={isShowed}>
          <input
            ref={inputRef}
            value={category}
            onChange={(e) => {
              setCategory(e.currentTarget.value);
            }}
            onKeyDown={(e) => handleSubmit(e.key)}
            type="text"
          />
          <button onClick={handleCreateNewCategory}>
            <PlusIcon className="create-category" />
          </button>
        </NewCategory>
        <CreateNewCategory onClick={handleShowCreateNewCategory}>
          <PlusIcon className="new-category" />
          <span>Nova categoria</span>
        </CreateNewCategory>
      </List>
    </Container>
  );
}

export { CategoriesDropDown };
