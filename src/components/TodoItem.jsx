import toast from "react-hot-toast";
import { ACTIONS, useTodos } from "../context/TodoContext";

function TodoItem({ todo, completed, id, setEditId, setInputQuery }) {
  const { DELETE_TODO, TOGGLE_TODO, EDIT_TODO } = ACTIONS;
  const { dispatch } = useTodos();

  function toggleTodo(id) {
    dispatch({ type: TOGGLE_TODO, payload: id });
  }

  function deleteTodo(id) {
    dispatch({ type: DELETE_TODO, payload: id });
    toast.success("Great! Your todo has been deleted.");
  }

  return (
    <li className="bg-[#12151e] rounded-2xl p-4 text-xl flex gap-2 justify-between items-center animate-appearing">
      <div className="flex gap-2 items-center flex-1 min-w-0">
        <button onClick={() => toggleTodo(id)}>{!completed ? "✔" : "✘"}</button>
        <span
          className={`truncate capitalize ${completed && "line-through"}`}
          title={todo}
        >
          {todo}
        </span>
      </div>
      <ul className="flex gap-2">
        <li>
          <button
            disabled={completed}
            onClick={() => {
              setInputQuery(todo);
              setEditId(id);
            }}
          >
            Edit
          </button>
        </li>
        <li>
          <button onClick={() => deleteTodo(id)}>Delete</button>
        </li>
      </ul>
    </li>
  );
}

export default TodoItem;
