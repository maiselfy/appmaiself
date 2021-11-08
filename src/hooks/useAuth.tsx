import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";
import React, { createContext, useContext } from "react";

interface AuthContext {
  signIn: () => void;
  user: {
    name: string;
    email: string;
  };
}
interface AuthProviderProps {
  children: ReactNode[];
}
const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
  function signIn() {}
  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
