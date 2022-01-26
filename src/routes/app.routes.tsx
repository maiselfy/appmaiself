import React from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import NewFriend from "../screens/NewFriend";
import Config from "../screens/Config";
import { DashboardRoutes } from "./dashboard.routes";
import Habits from "../screens/Habits";
import Finances from '../screens/Finances'
import NewFinance from "../screens/NewFinance"

const { Screen, Navigator } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.shape,
          height: 88,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name='Listagem'
        component={DashboardStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name='home' size={size} color={color} />
          ),
        }}
      />
      <Screen
        name='Adicionar Amigo'
        component={NewFriend}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name='adduser' size={size} color={color} />
          ),
        }}
      />
      <Screen
        name='Configurações'
        component={Config}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name='setting' size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
const Stack = createStackNavigator();
const DashboardStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Dashboard} />
      <Stack.Screen name='Habits' component={Habits} />
      <Stack.Screen name='Finances' component={Finances} />
      <Stack.Screen name='NewFinance' component={NewFinance} />
    </Stack.Navigator>
  );
};
