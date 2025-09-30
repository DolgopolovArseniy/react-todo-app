/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
  todos: [],
};

export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  CLEAR_TODOS: "CLEAR_TODOS",
  EDIT_TODO: "EDIT_TODO",
  FETCH_TODOS: "FETCH_TODOS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            todo:
              action.payload.charAt(0).toUpperCase() + action.payload.slice(1),
            id: crypto.randomUUID(),
            completed: false,
          },
        ],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "EDIT_TODO": {
      const { id, text } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, todo: text } : todo
        ),
      };
    }

    case "FETCH_TODOS": {
      return {
        ...state,
        todos: [
          ...state.todos,
          ...action.payload.map((todoObj) => ({
            todo: todoObj.todo,
            id: todoObj.id,
            completed: todoObj.completed,
          })),
        ],
      };
    }

    case "CLEAR_TODOS":
      return initialState;

    default:
      return state;
  }
};

export function TodoProvider({ children }) {
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || initialState;
  const [state, dispatch] = useReducer(reducer, storedTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => {
  return useContext(TodoContext);
};
