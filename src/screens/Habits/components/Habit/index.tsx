import React from "react";
import { Text, View } from "react-native";

import {
  Container,
  Color,
  HabitTitle,
  Frequency,
  FrequencyCard,
} from "./styles";

const Habit: React.FC = () => {
  return (
    <Container>
      <Color />
      <HabitTitle>Correr todos os dias</HabitTitle>
      <Frequency>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <FrequencyCard>
            <Text>{i}</Text>
          </FrequencyCard>
        ))}
      </Frequency>
    </Container>
  );
};

export default Habit;
