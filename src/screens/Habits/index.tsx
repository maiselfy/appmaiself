import React from "react";
import { Image, Text, View } from "react-native";
import Habit from "./components/Habit";

import { Container, Header, Title, Logo } from "./styles";

const Habits: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Hábitos</Title>
        <Logo source={require("../../assets/habitsLogo.png")} />
      </Header>
      <Habit/>
    </Container>
  );
};

export default Habits;
