import { useCategory } from "../../hooks/useCategory";
import { useTask } from "../../hooks/useTask";
import { CategoryList } from "./components/CategoryList";
import { Container } from "./styles";

function TaskList() {
  const { categories } = useCategory();

  return (
    <Container>
      {categories.map(({ label, value }) => (
        <CategoryList key={value} label={label} value={value} />
      ))}
    </Container>
  );
}

export { TaskList };
