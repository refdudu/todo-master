import { DeleteModal } from "./components/DeleteModal";
import { CategoryItem } from "./components/CategoryItem";

import { useTask } from "../../../../hooks/useTask";

import { CategoryTasks } from "../../../../@types/CategoryType";

import { Container } from "./styles";

function CategoriesList() {
  const { filteredTasks } = useTask();

  console.log(filteredTasks);

  return (
    <Container>
      {filteredTasks.map(({ tasks, category }: CategoryTasks) => (
        <CategoryItem key={category.value} category={category} tasks={tasks} />
      ))}
      <DeleteModal />
    </Container>
  );
}

export { CategoriesList };
