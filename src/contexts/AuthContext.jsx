/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("isAuthenticated"),
  );
  const initialState = {
    isAuthenticated,
    login() {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    },
    logout() {
      setIsAuthenticated(false);
      localStorage.removeItem("isAuthenticated");
    },
  };
  return <AuthContext value={initialState}>{children}</AuthContext>;
}

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth, AuthProvider };
