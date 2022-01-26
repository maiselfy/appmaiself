import React from "react";
import { View } from "react-native";
import { Header } from "../Habits/styles";

import { Container } from "./styles";

const Habit: React.FC = ({ navigation }) => {
  return (
    <Container onPress={() => navigation.navigate("Habit")}>
      <Header></Header>
    </Container>
  );
};

export default Habit;
