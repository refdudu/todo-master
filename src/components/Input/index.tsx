import { Button, ButtonContainer, Container, Icon } from "./styles";
import { CategoriesDropDown } from "../CategoriesDropDown";
import { useCategory } from "../../hooks/useCategory";
import toast, { Toaster } from "react-hot-toast";
import { useTask } from "../../hooks/useTask";
import { useState } from "react";

function Input() {
  const [categoryValue, setCategoryValue] = useState<number>();
  const [value, setValue] = useState("");
  const { categories } = useCategory();
  const { createTask } = useTask();

  function handleCreateTask() {
    if (!categoryValue) return toast.error("Selecione uma categoria");

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
      <Toaster />
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
