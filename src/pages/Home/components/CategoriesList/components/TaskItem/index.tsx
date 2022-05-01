import { useState } from "react";

import { Task } from "../../../../../../@types/TaskType";

import { InProgress } from "./InProgressIcon";

import c from "classnames";

import { Container, Content } from "./styles";
import { FinishedIcon, ThreeDotsVerticalIcon } from "./icons";
import { TaskActions } from "./TaskActions";

type ItemProps = {
  task: Task;
};

function TaskItem({ task }: ItemProps) {
  const [isShowed, setIsShowed] = useState(false);
  const [isMouseHover, setIsMouseHover] = useState(false);

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
        <ThreeDotsVerticalIcon onClick={handleShowOptions} />
        <TaskActions isShowed={isShowed} task={task} key={task.id} />
      </div>
    </Container>
  );
}
export { TaskItem };
