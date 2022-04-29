import { useTask } from "../../../../hooks/useTask";

import { useEffect, useState } from "react";

import { Container } from "./styles";

function Header() {
  const [text, setText] = useState("você não tem tarefas");
  const { tasks } = useTask();

  function handleChangeText() {
    if (tasks.length == 1) {
      return setText("você tem uma tarefa");
    }
    if (tasks.length > 1) {
      return setText(`você tem ${tasks.length} tarefas`);
    }
  }

  useEffect(() => {
    handleChangeText();
  }, [tasks]);

  return (
    <Container>
      <span>Suas tarefas</span>
      <span>{text}</span>
    </Container>
  );
}

export { Header };
