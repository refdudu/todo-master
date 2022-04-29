import { Toaster } from "react-hot-toast";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { CategoriesList } from "./components/CategoriesList";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Toaster />
      <Header />
      <Form />
      <CategoriesList />
    </Container>
  );
}

export { Home };
