import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Header from "./components/Header";
import About from "./components/About";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/todoContext";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="about" element={<About />} />
          <Route
            path="list"
            element={
              <TodoProvider>
                <TodoList />
              </TodoProvider>
            }
          />
        </Route>
      </Routes>
      <Toaster
        position="bottom-left"
        toastOptions={{
          style: { fontSize: "21px" },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
