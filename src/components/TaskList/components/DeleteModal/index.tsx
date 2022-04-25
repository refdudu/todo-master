import toast, { Toaster } from "react-hot-toast";
import { useModal } from "../../../../hooks/useModal";
import { useTask } from "../../../../hooks/useTask";
import {
  Wrapper,
  Container,
  WarningIcon,
  TitleContainer,
  ButtonsContainer,
  DeleteIcon,
  DeleteButton,
  CancelIcon,
  CancelButton,
} from "./styles";

function DeleteModal() {
  const { isOpened, setIsOpened, taskID } = useModal();
  const { deleteTask } = useTask();
  function handleDeleteTask() {
    setIsOpened(false);
    deleteTask(taskID);

    toast.success("Tarefa deletada com sucesso");
  }

  return (
    <Wrapper isOpened={isOpened}>
      <Container>
        <WarningIcon />
        <TitleContainer>
          <span>Você deseja deletar esta tarefa?</span>
        </TitleContainer>
        <ButtonsContainer>
          <DeleteButton onClick={handleDeleteTask}>
            <DeleteIcon />
            <span>Deletar tarefa</span>
          </DeleteButton>
          <CancelButton onClick={() => setIsOpened(false)}>
            <CancelIcon />
            <span>Cancelar</span>
          </CancelButton>
        </ButtonsContainer>
      </Container>
    </Wrapper>
  );
}
export { DeleteModal };
