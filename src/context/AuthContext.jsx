/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  users: [],
  isAuthenticated: false,
};

export const AUTH_ACTIONS = {
  CREATE_ACCOUNT: "CREATE_ACCOUNT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_ACCOUNT": {
      const { username, password } = action.payload;
      return {
        ...state,
        users: [
          ...state.users,
          {
            username: username,
            password: password,
            userId: crypto.randomUUID(),
          },
        ],
      };
    }

    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const storedUsers = initialState;
  const [state, dispatch] = useReducer(reducer, storedUsers);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useUsers = () => {
  return useContext(AuthContext);
};
