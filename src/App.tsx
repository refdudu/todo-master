import { CategoryProvider } from "./contexts/CategoryContext";
import { TaskProvider } from "./contexts/TaskContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <>
      <ModalProvider>
        <CategoryProvider>
          <TaskProvider>
            <Home />
            <GlobalStyles />
          </TaskProvider>
        </CategoryProvider>
      </ModalProvider>
    </>
  );
}

export default App;
