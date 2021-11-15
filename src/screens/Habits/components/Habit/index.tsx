import React from "react";
import { ImageSourcePropType, Text, View } from "react-native";

import {
  Container,
  Color,
  HabitTitle,
  Frequency,
  FrequencyCard,
  FrequencyCardText,
  TitleContainer,
  Header,
  StarContainer,
  Star,
  Description,
  StabilityText,
} from "./styles";

interface HabitProps {
  data: {
    title: string;
    color: string;
    description: string;
    star: ImageSourcePropType;
    stability: string;
  };
}

const Habit: React.FC<HabitProps> = ({ data }) => {
  return (
    <Container>
      <Header>
        <TitleContainer>
          <Color />
          <HabitTitle numberOfLines={2}>{data.title}</HabitTitle>
        </TitleContainer>
        <StarContainer>
          <Star source={data.star} />
          <StabilityText>{data.stability}</StabilityText>
        </StarContainer>
      </Header>
      <Description>{data.description}</Description>
      <Frequency>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <FrequencyCard>
            <FrequencyCardText>{i}</FrequencyCardText>
          </FrequencyCard>
        ))}
      </Frequency>
    </Container>
  );
};

export default Habit;
