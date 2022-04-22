import { ReactNode, useState } from "react";
import { Task } from "../../../../@types/TaskType";
import { useTask } from "../../../../hooks/useTask";
import {
  Container,
  ActionsContainer,
  DeleteIcon,
  InProgressIcon,
  EditIcon,
  FinishedIcon,
  ThreeDotsVerticalIcon,
} from "./styles";

type ItemProps = {
  children: ReactNode;
  task: Task;
};

function Item({ children, task }: ItemProps) {
  const [isShowed, setIsShowed] = useState(false);
  const { setInProgressTask } = useTask();

  function handleShowOptions() {
    if (isShowed) {
      setIsShowed(false);
    } else {
      setIsShowed(true);
    }
  }
  return (
    <Container>
      <span>{children}</span>

      <div>
        <ThreeDotsVerticalIcon onClick={handleShowOptions} />
        <ActionsContainer className={isShowed ? "showed" : ""}>
          <DeleteIcon />
          <InProgressIcon onClick={() => setInProgressTask(task)} />
          <EditIcon />
          <FinishedIcon />
        </ActionsContainer>
      </div>
    </Container>
  );
}
export { Item };
