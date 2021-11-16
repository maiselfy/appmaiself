import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";
import React, { createContext, useContext, useState } from "react";
import AsyncStorage from  '@react-native-community/async-storage';

import * as auth from '../services/auth'

interface User {
  name: string;
  email: string;
}
interface AuthContext {
  signed: boolean;
  signIn: () => Promise<void>;
  signOut: () => void;
  user: User | null;
  loading: boolean;
}
interface AuthProviderProps {
  children: ReactNode[];
}
const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
  const[user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await auth.signIn(); 
    const {token, user} = response
    setUser(user)

    await AsyncStorage.setItem('user', JSON.stringify(user));
    await AsyncStorage.setItem('token', token);
  }

  function signOut() {
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{signOut, signIn, user:{name: '', email: ''}, signed: !!user}}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
