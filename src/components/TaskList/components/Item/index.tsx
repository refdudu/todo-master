import { ReactNode, useState } from "react";
import { Task } from "../../../../@types/TaskType";
import { useTask } from "../../../../hooks/useTask";
import { InProgress } from "./InProgressIcon";
import {
  Container,
  Content,
  ActionsContainer,
  DeleteIcon,
  InProgressIcon,
  EditIcon,
  FinishedIcon,
  ThreeDotsVerticalIcon,
} from "./styles";
import c from "classnames";

type ItemProps = {
  children: ReactNode;
  task: Task;
};

function Item({ children, task }: ItemProps) {
  const [isShowed, setIsShowed] = useState(false);
  const [isMouseHover, setIsMouseHover] = useState(false);
  const { setInProgress, setIsCompleted } = useTask();

  function handleShowOptions() {
    if (isShowed) {
      setIsShowed(false);
    } else {
      setIsShowed(true);
    }
  }
  return (
    <Container
      onMouseLeave={() => setIsMouseHover(false)}
      onMouseEnter={() => setIsMouseHover(true)}
      className={c({
        "in-progress": task.inProgress,
        "is-completed": task.isCompleted,
        "is-finished": task.finishedAt !== undefined,
      })}
    >
      <Content>
        {task.inProgress && (
          <InProgress isMouseHover={isMouseHover} />
        )}
        {task.isCompleted && <FinishedIcon className="in-content" />}

        <span>{children}</span>
      </Content>

      <div>
        <ThreeDotsVerticalIcon onClick={handleShowOptions} />
        <ActionsContainer className={isShowed ? "showed" : ""}>
          <DeleteIcon />
          <InProgressIcon onClick={() => setInProgress(task)} />
          <EditIcon />
          <FinishedIcon onClick={() => setIsCompleted(task)} />
        </ActionsContainer>
      </div>
    </Container>
  );
}
export { Item };

// {task.isCompleted && (
//   <InProgress isMouseHover={isMouseHover} />
// )}
