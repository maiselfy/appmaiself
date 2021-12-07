import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import SendEmailWithToken from "../screens/SendEmailWithToken";
import ResetPassword from "../screens/ResetPassword/ResetPassword";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {/* <Screen name="login" component={Login} /> */}
      {/* <Screen name="register" component={Register} /> */}
      {/* <Screen name="send-email" component={SendEmailWithToken} /> */}
      <Screen name="reset-password" component={ResetPassword} />
    </Navigator>
  );
}
