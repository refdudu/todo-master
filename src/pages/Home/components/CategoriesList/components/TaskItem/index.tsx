import {  useState } from "react";

import { useModal } from "../../../../../../hooks/useModal";
import { useTask } from "../../../../../../hooks/useTask";

import { Task } from "../../../../../../@types/TaskType";

import { InProgress } from "./InProgressIcon";

import c from "classnames";

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

import {
  TimerContainer,
  Colon,
  HourContainer,
  MinutesContainer,
} from "./styles";

type ItemProps = {
  task: Task;
};

function TaskItem({ task }: ItemProps) {
  const [isShowed, setIsShowed] = useState(false);
  const [isMouseHover, setIsMouseHover] = useState(false);
  const { setInProgress, setIsCompleted } = useTask();
  const { setIsOpened, setTaskID } = useModal();

  function handleShowOptions() {
    if (isShowed) {
      setIsShowed(false);
    } else {
      setIsShowed(true);
    }
  }

  function handleDeleteTask() {
    setIsOpened(true);
    setTaskID(task.id);
  }
  return (
    <Container
      onMouseLeave={() => setIsMouseHover(false)}
      onMouseEnter={() => setIsMouseHover(true)}
      className={c({
        "in-progress": task.inProgress,
        "is-completed": task.isCompleted,
        "is-finished": !!task.finishedAt,
      })}
    >
      <Content>
        {task.inProgress && (
          <InProgress isMouseHover={isMouseHover} />
        )}
        {task.isCompleted && <FinishedIcon className="in-content" />}

        <span>{task.value}</span>
      </Content>

      <div>
        <ActionsContainer className={isShowed ? "showed" : ""}>
          <DeleteIcon onClick={handleDeleteTask} />
          {!task.isCompleted && (
            <InProgressIcon onClick={() => setInProgress(task)} />
          )}
          <EditIcon />
          {task.inProgress && (
            <FinishedIcon onClick={() => setIsCompleted(task)} />
          )}
        </ActionsContainer>
        {task.inProgress && (
          <TimerContainer className={isShowed ? "showed" : ""}>
            <HourContainer>
              <span>0</span>
              <span>3</span>
            </HourContainer>
            <Colon>:</Colon>
            <MinutesContainer>
              <span>2</span>
              <span>0</span>
            </MinutesContainer>
          </TimerContainer>
        )}
        <ThreeDotsVerticalIcon onClick={handleShowOptions} />
      </div>
    </Container>
  );
}
export { TaskItem };
