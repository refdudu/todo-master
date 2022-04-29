import { useState } from "react";
import toast from "react-hot-toast";

import { Container } from "./styles";

import { CategoriesDropDown } from "./components/CategoriesDropDown";
import { Button } from "./components/Button";

import { useCategory } from "../../../../hooks/useCategory";
import { useTask } from "../../../../hooks/useTask";
import { Input } from "./components/Input";

function Form() {
  const [categoryIndex, setCategoryIndex] = useState<number>();
  const [taskValue, setTaskValue] = useState<string>("");

  const { categories } = useCategory();
  const { createTask } = useTask();

  function handleCreateTask() {
    if (!categoryIndex)
      return toast.error("Selecione uma categoria!");

    if (taskValue === "") return toast.error("Digite uma tarefa!");

    createTask({ categoryIndex, value: taskValue });
    setTaskValue("");
  }

  return (
    <Container>
      <Input
        onKeyUp={({ key }) => key === "Enter" && handleCreateTask()}
        placeholder="Qual a sua tarefa?"
        setTaskValue={setTaskValue}
        taskValue={taskValue}
      />
      <CategoriesDropDown
        setCategoryIndex={setCategoryIndex}
        categories={categories}
      />
      <Button handleCreateTask={handleCreateTask} />
    </Container>
  );
}
export { Form };
