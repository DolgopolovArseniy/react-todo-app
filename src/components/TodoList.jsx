import { useState } from "react";
import TodoFetchPanel from "./TodoFetchPanel";
import TodoForm from "./TodoForm";
import List from "./List";

function TodoList() {
  const [isLoading, setLoading] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const [editId, setEditId] = useState(null);

  return (
    <>
      <main className="text-[#f9eee5] bg-[#171a25] max-w-xl min-h-[34rem] max-h-[34rem] mx-auto my-30 p-8 rounded-2xl animate-scaling flex flex-col gap-8">
        <TodoForm
          isLoading={isLoading}
          editId={editId}
          inputQuery={inputQuery}
          setInputQuery={setInputQuery}
          setEditId={setEditId}
        />
        <List
          isLoading={isLoading}
          setEditId={setEditId}
          setInputQuery={setInputQuery}
        />
      </main>
      <TodoFetchPanel setLoading={setLoading} />
    </>
  );
}

export default TodoList;
