import { useState } from "react";
import { useCategory } from "../../hooks/useCategory";
import { useTask } from "../../hooks/useTask";
import { CategoriesDropDown } from "../CategoriesDropDown";
import { Button, ButtonContainer, Container, Icon } from "./styles";

function Input() {
  const [value, setValue] = useState("");
  const [categoryValue, setCategoryValue] = useState<number>();
  const { categories } = useCategory();
  const { createTask } = useTask();

  function handleCreateTask() {
    if (categoryValue) {
      const data = { categoryIndex: categoryValue, value };
      const task = createTask(data);
      setValue("");
    }
  }
  function handleSubmit(key: string) {
    if (key == "Enter") {
      handleCreateTask();
    }
  }

  return (
    <Container onSubmit={() => console.log("value")}>
      <input
        value={value}
        placeholder="Qual a sua tarefa?"
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={(e) => handleSubmit(e.key)}
      />
      <CategoriesDropDown
        setCategoryValue={setCategoryValue}
        categories={categories}
      />
      <ButtonContainer onClick={handleCreateTask}>
        <Button>
          <Icon />
        </Button>
      </ButtonContainer>
    </Container>
  );
}
export { Input };
