import { CategoryProvider } from "./contexts/CategoryContext";
import { TaskProvider } from "./contexts/TaskContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <CategoryProvider>
        <TaskProvider>
          <Home />
          <GlobalStyles />
        </TaskProvider>
      </CategoryProvider>
    </>
  );
}

export default App;
