/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  users: [],
  isAuthenticated: false,
  currentUser: null,
};

export const AUTH_ACTIONS = {
  CREATE_ACCOUNT: "CREATE_ACCOUNT",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
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

    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
      };

    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const storedState =
    JSON.parse(localStorage.getItem("authState")) || initialState;
  const [state, dispatch] = useReducer(reducer, storedState);

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
