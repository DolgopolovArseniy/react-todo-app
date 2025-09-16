import { useState } from "react";
import { ACTIONS, useTodos } from "../context/TodoContext";
import toast from "react-hot-toast";

function FetchDiv({ setLoading }) {
  const [fetched, setFetched] = useState(false);
  const { dispatch } = useTodos();

  const { ADD_TODO, CLEAR_TODOS } = ACTIONS;

  function handleClearTodos() {
    dispatch({ type: CLEAR_TODOS });
    setFetched(false);
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
      <button
        className="text-xl uppercase cursor-pointer inline-block border-2 border-[#f1d5bf] rounded-lg px-2.5 py-1 hover:bg-[#f1d5bf] hover:text-[#2e3349] duration-150 ease-in-out text-[#f1d5bf] font-semibold disabled:border-[#aaaaaa] disabled:text-[#aaaaaa] disabled:bg-[#171a25] disabled:cursor-default"
        onClick={fetchTodos}
        disabled={fetched}
      >
        Fetch
      </button>
      <button
        className="text-xl uppercase cursor-pointer inline-block border-2 border-[#f1d5bf] rounded-lg px-2.5 py-1 hover:bg-[#f1d5bf] hover:text-[#2e3349] duration-150 ease-in-out text-[#f1d5bf] font-semibold disabled:border-[#aaaaaa] disabled:text-[#aaaaaa] disabled:bg-[#171a25] disabled:cursor-default"
        onClick={handleClearTodos}
      >
        CLEAR
      </button>
    </div>
  );
}

export default FetchDiv;
