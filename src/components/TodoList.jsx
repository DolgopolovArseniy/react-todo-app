import { useState } from "react";
import FetchDiv from "./FetchDiv";
import TodoForm from "./TodoForm";
import List from "./List";
import { ACTIONS, useTodos } from "../context/TodoContext";

function TodoList() {
  const [isLoading, setLoading] = useState(false);
  const { todos, dispatch } = useTodos();

  return (
    <>
      <main className="text-[#f9eee5] bg-[#171a25] max-w-xl min-h-[34rem] max-h-[34rem] mx-auto my-30 p-8 rounded-2xl animate-scaling flex flex-col gap-8">
        <TodoForm isLoading={isLoading} />
        <List todos={todos} isLoading={isLoading} />
      </main>
      <FetchDiv dispatch={dispatch} setLoading={setLoading} />
    </>
  );
}

export default TodoList;
