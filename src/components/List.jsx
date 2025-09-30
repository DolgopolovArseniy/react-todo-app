import { useTodos } from "../context/todoContext";
import Loader from "./Loader";
import TodoItem from "./TodoItem";

function List({ isLoading, setEditId, setInputQuery }) {
  const { todos } = useTodos();
  return (
    <section
      className={`flex-grow overflow-y-scroll scrollbar-invisible p-2 ${
        isLoading && "flex justify-center items-center"
      }`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <ul className="flex flex-col gap-2.5">
          {todos.map((i) => (
            <TodoItem
              todo={i.todo}
              completed={i.completed}
              key={i.id}
              id={i.id}
              setEditId={setEditId}
              setInputQuery={setInputQuery}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default List;
