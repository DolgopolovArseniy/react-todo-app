import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Header from "./components/Header";
import About from "./components/About";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <Header />
            </AuthProvider>
          }
        >
          <Route index element={<Navigate to="/login" />} />
          <Route
            path="login"
            element={
              <AuthProvider>
                <Login />
              </AuthProvider>
            }
          />
          <Route
            path="sign-up"
            element={
              <AuthProvider>
                <SignUp />
              </AuthProvider>
            }
          />
          <Route path="about" element={<About />} />
          <Route
            path=":username/list"
            element={
              <AuthProvider>
                <TodoProvider>
                  <TodoList />
                </TodoProvider>
              </AuthProvider>
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
