import { Container, Content, Icon, Text } from "./styles";

type ButtonProps = {
  handleCreateTask: () => void;
};

function Button({ handleCreateTask }: ButtonProps) {
  return (
    <Container onClick={handleCreateTask}>
      <Content>
        <Icon />
        <Text>Adicionar</Text>
      </Content>
    </Container>
  );
}

export { Button };
