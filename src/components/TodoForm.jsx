import { TODO_ACTIONS, useTodos } from "../context/todoContext";
import toast from "react-hot-toast";

function TodoForm({ isLoading, inputQuery, setInputQuery, editId, setEditId }) {
  const { dispatch } = useTodos();
  const { ADD_TODO, EDIT_TODO } = TODO_ACTIONS;

  function addTodo(text) {
    dispatch({ type: ADD_TODO, payload: text });
  }

  function editTodo(idAndTextObj) {
    dispatch({ type: EDIT_TODO, payload: idAndTextObj });
  }

  function cancelEdit(e) {
    e.stopPropagation();
    setEditId(null);
    setInputQuery("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputQuery.trim()) {
      toast.error("Oops! Looks like you forgot to type something.");
      return;
    }

    if (editId) {
      editTodo({ id: editId, text: inputQuery });
      setInputQuery("");
      setEditId(null);
      toast.success("Great! Your todo has been edited.");
    } else {
      addTodo(inputQuery);
      setInputQuery("");
      toast.success("Great! Your todo has been added.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-[#f1d5bf] flex gap-1.5 justify-center h-xl"
    >
      <input
        type="text"
        value={inputQuery}
        onChange={(e) => setInputQuery(e.target.value)}
      />
      <button disabled={isLoading}>{editId ? "OK" : "Add"}</button>
      {editId && (
        <button
          type="button"
          disabled={isLoading}
          onClick={(e) => cancelEdit(e)}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default TodoForm;
