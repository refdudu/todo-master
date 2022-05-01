import { Container } from "./styles";
import {
  DeleteIcon,
  EditIcon,
  FinishedIcon,
  InProgressIcon,
} from "../icons";

import { useModal } from "../../../../../../../hooks/useModal";
import { useTask } from "../../../../../../../hooks/useTask";
import { Task } from "../../../../../../../@types/TaskType";

interface TaskActionsProps {
  isShowed: boolean;
  task: Task;
}

function TaskActions({ task, isShowed }: TaskActionsProps) {
  const { setInProgress, setIsCompleted } = useTask();
  const { setIsOpened, setTaskID } = useModal();

  function handleDeleteTask() {
    setIsOpened(true);
    setTaskID(task.id);
  }
  return (
    <Container className={isShowed ? "showed" : ""}>
      <DeleteIcon onClick={handleDeleteTask} />
      {!task.isCompleted && (
        <InProgressIcon onClick={() => setInProgress(task)} />
      )}
      <EditIcon />
      {task.inProgress && (
        <FinishedIcon onClick={() => setIsCompleted(task)} />
      )}
    </Container>
  );
}
export { TaskActions };
