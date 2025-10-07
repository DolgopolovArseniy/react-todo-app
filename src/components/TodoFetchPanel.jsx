import { TODO_ACTIONS, useTodos } from "../context/TodoContext";
import toast from "react-hot-toast";
import { useGetTodos } from "../hooks/useGetTodos";

function TodoFetchPanel({ setLoading }) {
  const { CLEAR_TODOS, FETCH_TODOS } = TODO_ACTIONS;
  const { todos, dispatch } = useTodos();
  const { fetchTodos } = useGetTodos(setLoading);

  function handleClearTodos() {
    if (todos.length === 0) return;
    dispatch({ type: CLEAR_TODOS });
    toast.success("Great! Your list has been cleared.");
  }

  return (
    <div className="fixed flex flex-col p-5 border-2 rounded-2xl border-[#f1d5bf] gap-3 shadow-lg shadow-[#f4ddcc] bottom-14 right-14 bg-[#171a25]">
      <p className="uppercase text-xl font-semibold">Fetch from API</p>
      <button onClick={fetchTodos}>Fetch</button>
      <button onClick={handleClearTodos}>CLEAR</button>
    </div>
  );
}

export default TodoFetchPanel;
