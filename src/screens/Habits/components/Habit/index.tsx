import React from "react";
import { addDays, format, subDays } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
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
  FrequencyDay,FrequencyWeekDay
} from "./styles";

interface HabitProps {
  data: {
    name: string;
    color: string;
    description: string;
    star: ImageSourcePropType;
    stability: string;
    currentWeekFrequency: {
      checked: boolean;
      date: Date;
    }[];
  };
}

const Habit: React.FC<HabitProps> = ({ data }) => {
  console.log(data);

  return (
    <Container>
      <Header>
        <TitleContainer>
          <Color color={data.color}/>
          <HabitTitle numberOfLines={2}>{data.name}</HabitTitle>
        </TitleContainer>
        <StarContainer>
          {/* <Star source={data.star} /> */}
          {/* <StabilityText>{data.stability}</StabilityText> */}
        </StarContainer>
      </Header>
      <Description>{data.description}</Description>
      <Frequency>
        {data.currentWeekFrequency.map((i) => (
          <FrequencyCard>
            <FrequencyWeekDay>{format(addDays(new Date(i.date), 1), "EEEEEE", { locale: ptBr })}</FrequencyWeekDay>
            <FrequencyDay checked={i.checked}>
              <FrequencyCardText>
                {format(addDays(new Date(i.date), 1), "dd")}
              </FrequencyCardText>
            </FrequencyDay>
          </FrequencyCard>
        ))}
      </Frequency>
    </Container>
  );
};

export default Habit;
