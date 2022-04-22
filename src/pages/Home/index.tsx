import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TaskList } from "../../components/TaskList";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Header totalTasks={2} />
      <Input />
      <TaskList />
    </Container>
  );
}

export { Home };
