import { useAuth } from "../context/AuthContext";
import { TODO_ACTIONS, useTodos } from "../context/TodoContext";
import toast from "react-hot-toast";

function FetchDiv({ setLoading }) {
  const { CLEAR_TODOS, FETCH_TODOS } = TODO_ACTIONS;
  const { todos, dispatch } = useTodos();
  const { currentUser } = useAuth();

  const userId = currentUser.userId;

  function handleClearTodos() {
    if (todos.length === 0) return;
    dispatch({ type: CLEAR_TODOS });
    toast.success("Great! Your list has been cleared.");
  }

  async function fetchTodos() {
    setLoading(true);
    try {
      const fetchPromises = Array.from({ length: 10 }, () =>
        fetch("https://dummyjson.com/todos/random").then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
      );

      const randomTodos = await Promise.all(fetchPromises);

      dispatch({ type: FETCH_TODOS, payload: { randomTodos, userId } });

      toast.success("Great! You have successfully fetched todos.");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  return (
    <div className="fixed flex flex-col p-5 border-2 rounded-2xl border-[#f1d5bf] gap-3 shadow-lg shadow-[#f4ddcc] bottom-14 right-14 bg-[#171a25]">
      <p className="uppercase text-xl font-semibold">Fetch from API</p>
      <button onClick={fetchTodos}>Fetch</button>
      <button onClick={handleClearTodos}>CLEAR</button>
    </div>
  );
}

export default FetchDiv;
