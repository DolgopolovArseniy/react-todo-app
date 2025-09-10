import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Header from "./components/Header";
import About from "./components/About";
import TodoList from "./components/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Navigate to="/about" />} />
          <Route path="about" element={<About />} />
          <Route path="list" element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
