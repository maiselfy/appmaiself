import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";
import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import AsyncStorage from '@react-native-community/async-storage';

import api from "../api/api";

import * as auth from "../services/auth";

interface User {
  name: string;
  email: string;
  lastname: string;
  birthdate: parse(birthdate, "ddMMyyyy", new Date());
}
export interface RegisterData {
  name: string;
  lastname: string;
  birthdate: Date;
  email: string;
  password: string;
  passwordConfirmation: string;
}
export interface LoginData {
  email: string;
  password: string;
}
interface AuthContext {
  signed: boolean;
  signIn: () => Promise<void>;
  registerUser: () => Promise<void>;
  signOut: () => void;
  loggedUser: LoggedUser | null;
  loading: boolean;
}
interface AuthProviderProps {
  children: ReactNode[];
}
const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
  const [User, setUser] = useState<User>(null);

  async function signIn({ email, password }: LoginData) {

    try {
      const response = await api.post("api/session", {
        email: email,
        password: password,
      });
      
      if (!response.data.message) {
        console.log("RESPONSE => ", response.data);
        /*
        ToastAndroid.showWithGravity(
          "Usuário logado com sucesso!!!",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        */
        const token = response.data;

        const userResponse = await api.get("/api/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser({
          email: userResponse.data.email,
          name: userResponse.data.name,
        });

        await AsyncStorage.setItem("user", JSON.stringify(user));
        await AsyncStorage.setItem("token", token);
      } else {
        console.log("ERROR RESPONSE => ", response.data);
        /*
        ToastAndroid.showWithGravity(
          `${response.data.message}`,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        */
      }
    } catch (error) {
      console.log("ERROR => ", error);
      /*
    ToastAndroid.showWithGravity(
      "Error interno no servidor! Por favor, tente novamente!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    */
    }
  }

  async function registerUser() {
    try {
      console.log("Entrei na chamada");
      const response = await api.post("api/user", {
        name,
        lastname,
        email,
        password,
        birthdate,
      });

      if (!response.data.message) {
        console.log("RESPONSE => ", response.data);
        /*
        ToastAndroid.showWithGravity(
          "Novo usuário cadastrado com sucesso!!!",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        */
      } else {
        console.log("RESPONSE ERROR=> ", response.data);
        /*
        ToastAndroid.showWithGravity(
          `${response.data.message}`,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        */
      }
    } catch (error) {
      console.log("ERROR => ", error);
      /*
      ToastAndroid.showWithGravity(
        "Error interno no servidor! Por favor, tente novamente!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      */
    }
  }

  function signOut() {
    setLoggedUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signOut, signIn, registerUser, user, signed: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
