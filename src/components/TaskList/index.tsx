import { useTask } from "../../hooks/useTask";
import { CategoryList } from "./components/CategoryList";
import { Container } from "./styles";

function TaskList() {
  const { filteredTasks } = useTask();

  return (
    <Container>
      {filteredTasks.map(({ tasks, category }: any) => (
        <CategoryList
          key={category.value}
          label={category.label}
          value={category.value}
          tasks={tasks}
        />
      ))}
    </Container>
  );
}

export { TaskList };
