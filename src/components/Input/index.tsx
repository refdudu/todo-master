import { Container, InputContainer, ClearIcon } from "./styles";
import { CategoriesDropDown } from "../CategoriesDropDown";
import { useCategory } from "../../hooks/useCategory";
import toast, { Toaster } from "react-hot-toast";
import { useTask } from "../../hooks/useTask";
import { Button } from "./components/Button";
import { useState } from "react";

function Input() {
  const [categoryIndex, setCategoryIndex] = useState<number>();
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState<string>("");

  const { categories } = useCategory();
  const { createTask } = useTask();

  function handleCreateTask() {
    if (categoryIndex) {
      if (value.trim() === "") {
        toast.error("Digite uma tarefa!");
      } else {
        createTask({ categoryIndex, value });
        setValue("");
      }
    } else {
      toast.error("Selecione uma categoria!");
    }
  }

  function handleSubmit(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    event.preventDefault();

    const key = event.key.toLowerCase();
    if (key === "enter") {
      handleCreateTask();
    }
  }
  return (
    <Container>
      <InputContainer isFocus={isFocus}>
        <input
          value={value}
          placeholder="Qual a sua tarefa?"
          onChange={(event) => setValue(event.currentTarget.value)}
          onKeyUp={(event) => handleSubmit(event)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <ClearIcon onClick={() => setValue("")} />
      </InputContainer>

      <CategoriesDropDown
        setCategoryIndex={setCategoryIndex}
        categories={categories}
      />

      <Button handleCreateTask={handleCreateTask} />
    </Container>
  );
}
export { Input };
