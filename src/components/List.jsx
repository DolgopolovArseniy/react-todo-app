import Loader from "./Loader";
import TodoItem from "./TodoItem";

function List({ todos, isLoading }) {
  return (
    <section
      className={`flex-grow overflow-y-auto p-2 ${
        isLoading && "flex justify-center items-center"
      }`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <ul className="flex flex-col gap-2.5">
          {todos.map((i) => (
            <TodoItem todo={i.todo} completed={i.completed} key={i.id} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default List;
