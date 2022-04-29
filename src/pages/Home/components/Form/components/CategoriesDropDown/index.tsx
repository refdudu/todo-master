import React, { FormEvent, useRef, useState } from "react";
import { Category } from "../../../../../../@types/CategoryType";
import { NewCategory } from "./NewCategory";
import { Container, Title, List, Item, CreateNewCategory, CaretDownIcon, PlusIcon } from "./styles";

type CategoriesDropDownProps = {
  categories: Category[];
  setCategoryIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
};

function CategoriesDropDown({ categories, setCategoryIndex }: CategoriesDropDownProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isShowed, setIsShowed] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState("Categorias");

  function handleItemSelect({ label, value }: Category) {
    setCategoryIndex(value);
    setTitle(label);
  }

  function handleClose() {
    if (isOpened) {
      setIsOpened(false);
      setIsShowed(false);
      setCategory("");
    } else {
      setIsOpened(true);
    }
  }

  return (
    <Container onMouseEnter={handleClose} onMouseLeave={handleClose}>
      <Title onTouchStartCapture={handleClose}>
        <span>{title}</span>
        <CaretDownIcon />
      </Title>
      <List isOpened={isOpened}>
        {categories.map(({ label, value }) => {
          return (
            <Item key={value} onClick={() => handleItemSelect({ label, value })} value={value}>
              {label}
            </Item>
          );
        })}
        <NewCategory category={category} setCategory={setCategory} isShowed={isShowed} setIsShowed={setIsShowed} />
        <CreateNewCategory onClick={() => setIsShowed(true)}>
          <PlusIcon className="new-category" />
          <span>Nova categoria</span>
        </CreateNewCategory>
      </List>
    </Container>
  );
}

export { CategoriesDropDown };
