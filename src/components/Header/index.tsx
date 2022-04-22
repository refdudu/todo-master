import { useEffect, useState } from "react";
import { useTask } from "../../hooks/useTask";
import { Container, Text } from "./styles";

function Header() {
  const { text } = useTask();

  return (
    <Container>
      <Text>Suas tarefas</Text>
      <Text>{text}</Text>
    </Container>
  );
}

export { Header };
