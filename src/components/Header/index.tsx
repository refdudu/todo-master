import { useEffect, useState } from "react";
import { useTask } from "../../hooks/useTask";
import { Container, Text } from "./styles";

function Header() {
  const [text, setText] = useState("você não tem tarefas");
  const { tasks } = useTask();

  useEffect(() => {
    if (tasks.length == 1) {
      setText("você tem uma tarefa");
    }
    if (tasks.length > 1) {
      setText(`você tem ${tasks.length} tarefas`);
    }
  }, [tasks]);

  return (
    <Container>
      <Text>Suas tarefas</Text>
      <Text>{text}</Text>
    </Container>
  );
}

export { Header };
