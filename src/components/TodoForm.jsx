import { useState } from "react";
import { ACTIONS, useTodos } from "../context/TodoContext";
import toast from "react-hot-toast";

function TodoForm({ isLoading }) {
  const [inputQuery, setInputQuery] = useState("");
  const { dispatch } = useTodos();
  const { ADD_TODO } = ACTIONS;

  function addTodo(text) {
    dispatch({ type: ADD_TODO, payload: text });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputQuery.trim()) {
      toast.error("Oops! Looks like you forgot to type something.");
      return;
    }
    addTodo(inputQuery);
    setInputQuery("");
    toast.success("Great! Your todo has been added.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-[#f1d5bf] flex gap-1.5 justify-center h-xl"
    >
      <input
        type="text"
        name=""
        id=""
        className="border-2 border-[#f1d5bf] rounded-lg p-2 text-[#f9eee5] text-xl min-w-[24rem]"
        value={inputQuery}
        onChange={(e) => setInputQuery(e.target.value)}
      />
      <button
        className="text-xl uppercase cursor-pointer inline-block border-2 border-[#f1d5bf] rounded-lg px-2.5 py-1 hover:bg-[#f1d5bf] hover:text-[#2e3349] duration-150 ease-in-out disabled:border-[#aaaaaa] disabled:text-[#aaaaaa] disabled:bg-[#171a25] disabled:cursor-default"
        disabled={isLoading}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
