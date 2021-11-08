import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/useAuth";

const Routes: React.FC = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
