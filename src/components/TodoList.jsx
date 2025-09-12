import { useState } from "react";
import FetchDiv from "./FetchDiv";
import InputForm from "./InputForm";
import List from "./List";

function TodoList() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <main className="text-[#f9eee5] bg-[#171a25] max-w-xl min-h-[34rem] max-h-[34rem] mx-auto my-30 p-8 rounded-2xl animate-scaling flex flex-col gap-8">
        <InputForm />
        <List todos={todos} />
      </main>
      <FetchDiv setTodos={setTodos} />
    </>
  );
}

export default TodoList;
