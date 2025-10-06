import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Header from "./components/Header";
import About from "./components/About";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { TodoProvider } from "./context/TodoContext";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="about" element={<About />} />
          <Route
            path=":username/list"
            element={
              <TodoProvider>
                <ProtectedRoute>
                  <TodoList />
                </ProtectedRoute>
              </TodoProvider>
            }
          />
        </Routes>
        <Toaster
          position="bottom-left"
          toastOptions={{
            style: { fontSize: "21px" },
          }}
        />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
