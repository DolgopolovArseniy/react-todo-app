/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
  todos: [],
};

export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  CLEAR_TODOS: "CLEAR_TODOS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            todo: action.payload,
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

    case "CLEAR_TODOS":
      return initialState;

    default:
      return state;
  }
};

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => {
  return useContext(TodoContext);
};
