import React from "react";
import { Image, Text, View } from "react-native";
import Habit from "./components/Habit";

import {
  Container,
  Header,
  Title,
  Logo,
  HabitList,
  NewHabitButton,
  NewHabitButtonText,
} from "./styles";

const Habits: React.FC = () => {
  const data = [
    {
      title: "correr todo santo dia",
      description: "Correr todo santo dia",
      star: require("../../assets/stars/galaxy.png"),
      stability: "34%",
    },
    {
      title: "correr todo santo dia",
      description: "Correr todo santo dia",
      star: require("../../assets/stars/galaxy.png"),
      stability: "34%",
    },
    {
      title: "correr todo santo dia",
      description: "Correr todo santo dia",
      star: require("../../assets/stars/galaxy.png"),
      stability: "34%",
    },
    {
      title:
        "correr todo santo dia meu deus do ceu nem que me paguem eu continuo com isso aqui",
      description: "Correr todo santo dia",
      star: require("../../assets/stars/galaxy.png"),
      stability: "34%",
    },
  ];
  return (
    <Container>
      <Header>
        <Title>Hábitos</Title>
        <Logo source={require("../../assets/habitsLogo.png")} />
      </Header>
      <HabitList
        data={data}
        renderItem={(item) => <Habit data={item.item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
      <NewHabitButton>
        <NewHabitButtonText>Novo Hábito</NewHabitButtonText>
      </NewHabitButton>
    </Container>
  );
};

export default Habits;
