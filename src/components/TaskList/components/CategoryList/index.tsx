import { useTask } from "../../../../hooks/useTask";
import { Task } from "../../../../@types/TaskType";
import { useEffect, useMemo, useState } from "react";
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

function CategoryList({ label, tasks }: CategoryListProps) {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const orderTasks = useMemo(() => {
    const orderByID = tasks.sort((a, b) => a.id - b.id);

    const arInProgress = orderByID.filter((task) => task.inProgress);
    const arIsCompleted = orderByID.filter(
      (task) => task.isCompleted
    );
    const arOthers = orderByID.filter(
      (task) => !task.isCompleted && !task.inProgress
    );

    const ar = [...arInProgress, ...arOthers, ...arIsCompleted];

    return ar;
  }, [tasks]);
  //height 61px

  useEffect(() => {
    const height = tasks.length * 61;
    setHeight(height);
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
      <List height={height} className={isClosed ? "closed" : ""}>
        <ListContainer>
          {orderTasks.map((task) => {
            return (
              <Item task={task} children={task.value} key={task.id} />
            );
          })}
        </ListContainer>
      </List>
    </Container>
  );
}
export { CategoryList };
