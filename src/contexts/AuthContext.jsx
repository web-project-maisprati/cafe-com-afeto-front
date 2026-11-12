import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  function login(novoToken) {
    localStorage.setItem("token", novoToken);
    setToken(novoToken);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  const autenticado = Boolean(token);

  return (
    <AuthContext.Provider value={{ token, autenticado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
