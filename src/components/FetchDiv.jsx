import { useState } from "react";
import { ACTIONS, useTodos } from "../context/TodoContext";
import toast from "react-hot-toast";

function FetchDiv({ setLoading }) {
  const [fetched, setFetched] = useState(false);
  const { todos, dispatch } = useTodos();

  const { ADD_TODO, CLEAR_TODOS } = ACTIONS;

  function handleClearTodos() {
    if (todos.length === 0) return;
    dispatch({ type: CLEAR_TODOS });
    setFetched(false);
    toast.success("Great! Your list has been cleared.");
  }

  async function fetchTodos() {
    setFetched(true);
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/todos?limit=10");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();

      data.todos.map((todo) =>
        dispatch({ type: ADD_TODO, payload: todo.todo })
      );

      toast.success("Great! You have successfully fetched todos.");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  return (
    <div className="fixed flex flex-col p-5 border-2 rounded-2xl border-[#f1d5bf] gap-3 shadow-lg shadow-[#f4ddcc] bottom-14 right-14 bg-[#171a25]">
      <p className="uppercase text-xl font-semibold">Fetch from API</p>
      <button onClick={fetchTodos} disabled={fetched}>
        Fetch
      </button>
      <button onClick={handleClearTodos}>CLEAR</button>
    </div>
  );
}

export default FetchDiv;
