import { AsyncStorage } from "react-native";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import api from "../../api/api";
import { useAuth } from "../../hooks/useAuth";
import Habit from "./components/Habit";

import {
  Container,
  Header,
  Title,
  Logo,
  HabitList,
  NewHabitButton,
  NewHabitButtonText,
  AllHabitsTxt,
  TitleContainer,
  HabitsStatsContainer,
  StatItem,
  StatItemTxt,
  StatItemLabel,
} from "./styles";

export interface Habit {
  id: string;
  user_id: string;
  name: string;
  description: string;
  objective: string;
  color: string;
  buddy_id: string;
  stability: {
    avg: number;
    stabilityChartData: number[];
  };
  currentWeekFrequency: {
    date: string;
    checked: boolean;
  }[];
}

const Habits: React.FC = ({ navigation }) => {
  const { user } = useAuth();
  const [habits, setHabits] = useState<Habit[]>([]);
  const [stabilityAvg, setStabilityAvg] = useState(0);

  useEffect(() => {
    async function getHabits() {
      if (user) {
        const token = await AsyncStorage.getItem("token");
        api
          .get(`api/habit/list/${user.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => setHabits(response.data));
      }
    }
    getHabits();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Hábitos</Title>
        <Logo source={require("../../assets/habitsLogo.png")} />
      </Header>
      <NewHabitButton>
        <NewHabitButtonText>Novo Hábito</NewHabitButtonText>
      </NewHabitButton>
      {/* <HabitsStatsContainer>
        <StatItem>
          <StatItemLabel>TOTAL</StatItemLabel>
          <StatItemTxt>{habits.length}</StatItemTxt>
        </StatItem>
      </HabitsStatsContainer> */}
      <TitleContainer>
        <AllHabitsTxt>Todos os Hábitos</AllHabitsTxt>
      </TitleContainer>
      <HabitList
        data={habits}
        renderItem={(item) => <Habit data={item.item} key={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </Container>
  );
};

export default Habits;
