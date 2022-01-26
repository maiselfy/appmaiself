import React, { useContext } from "react";
import { addDays, format, subDays } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { NavigationContext } from "@react-navigation/native";
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
  FrequencyDay,
  FrequencyWeekDay,
} from "./styles";
import { Habit as HabitData } from "../..";

interface HabitProps {
  data: HabitData;
}

const Habit: React.FC<HabitProps> = ({ data }) => {
  // console.log(data);
  const navigation = useContext(NavigationContext);

  return (
    <Container onPress={() => navigation.navigate("Habit")}>
      <Header>
        <TitleContainer>
          <Color color={data.color} /> 
          <HabitTitle numberOfLines={2}>{data.name}</HabitTitle>
        </TitleContainer>
        <StarContainer>
          {/* <Star source={data.star} /> */}
          <StabilityText>{data.stability.avg}%</StabilityText>
        </StarContainer>
      </Header>
      <Description>{data.description}</Description>
      <Frequency>
        {data.currentWeekFrequency.map((i) => (
          <FrequencyCard key={i.date}>
            <FrequencyWeekDay>
              {format(addDays(new Date(i.date), 1), "EEEEEE", { locale: ptBr })}
            </FrequencyWeekDay>
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
