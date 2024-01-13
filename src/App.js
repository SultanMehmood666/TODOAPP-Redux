import { Route, Routes } from "react-router-dom";
import TodoList from "./Pages/ToDoList/TodoList";

function App() {
  return (
    <>
    <Routes>
        <Route path="*" element={<TodoList/>} />
    </Routes>

    </>
  );
}

export default App;
