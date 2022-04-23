import { useTask } from "../../../../hooks/useTask";
import { Task } from "../../../../@types/TaskType";
import { useEffect, useState } from "react";
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
  tasks: Task[];
};

function CategoryList({ label, value, tasks }: CategoryListProps) {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const { filteredTasks } = useTask();

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
          {tasks.length > 0 &&
            tasks.map((task) => {
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
