import { useEffect, useState } from "react";
import { Task } from "../../../../@types/TaskType";
import { useTask } from "../../../../hooks/useTask";
import { Item } from "../Item";

import {
  Container,
  Line,
  List,
  ListContainer,
  Title,
} from "./styles";

type CategoryListProps = {
  label: string;
  value: number;
};

function CategoryList({ label, value }: CategoryListProps) {
  const [isClosed, setIsClosed] = useState<boolean>(true);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const { tasks } = useTask();

  useEffect(() => {
    if (tasks.length > 0) {
      setFilteredTasks(
        tasks.filter((task) => task.categoryIndex === value)
      );
    }
  }, [tasks]);

  return (
    <Container>
      <Title
        onClick={() =>
          isClosed ? setIsClosed(false) : setIsClosed(true)
        }
      >
        <Line />
        <span>{label}</span>
        <Line />
      </Title>
      <List className={isClosed ? "closed" : ""}>
        <ListContainer>
          {filteredTasks.length > 0 &&
            filteredTasks.map((task) => {
              return (
                <Item
                  task={task}
                  children={task.value}
                  key={task.id}
                />
              );
            })}
        </ListContainer>
      </List>
    </Container>
  );
}
export { CategoryList };
