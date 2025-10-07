import toast from "react-hot-toast";
import { TODO_ACTIONS, useTodos } from "../context/TodoContext";
import { useAuth } from "../context/AuthContext";

export function useGetTodos(setExternalLoading) {
  const { dispatch } = useTodos();
  const { FETCH_TODOS } = TODO_ACTIONS;
  const { currentUser } = useAuth();

  const userId = currentUser.userId;

  async function fetchTodos() {
    setExternalLoading(true);
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
    setExternalLoading(false);
  }

  return { fetchTodos };
}
