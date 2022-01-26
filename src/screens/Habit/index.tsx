import React from "react";
import { View } from "react-native";
import { Header } from "../Habits/styles";
import { RiBarChartLine } from "react-icons/ri";
import { LineChart } from "react-native-chart-kit";

import {
  Container,
  HabitDescription,
  HabitHeader,
  HabitHeaderInfo,
  HabitTitle,
  StabilityContainer,
  StabilityLabel,
  StabilityText,
  StabilityIcon,
  CheckButtonContainer,
  DoneImg,
  DoneInfoContainer,
  DoneInfoDescription,
  DoneInfoTitle,
  StarImg,
  StarContainer,
  StarInfo,
  StarDescription,
  StarTitle,
  NextStarDescription,
} from "./styles";
import { ChartConfig } from "react-native-chart-kit/dist/HelperTypes";
import { useTheme } from "styled-components";
import { LineChartProps } from "react-native-chart-kit/dist/line-chart/LineChart";

const Habit: React.FC = ({ navigation }) => {
  const theme = useTheme();
  const chartConfig: LineChartProps = {
    backgroundGradientFrom: theme.colors.default,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: theme.colors.default,
    backgroundGradientToOpacity: 0,
    fillShadowGradient: theme.colors.default,
    color: () => theme.colors.success,
    propsForVerticalLabels: { opacity: 0 },
    propsForHorizontalLabels: { opacity: 0 },
    propsForBackgroundLines: { stroke: 0 },
    fillShadowGradient: theme.colors.success,
  };
  const data = {
    datasets: [
      {
        data: [4, 8, 6, 9, 3, 5, 3],
        color: () => theme.colors.success, // optional
        strokeWidth: 2,
        // optional
      },
    ],
  };
  return (
    <Container>
      <HabitHeader>
        <HabitHeaderInfo>
          <HabitTitle>Correr todos os dias</HabitTitle>
          <HabitDescription>tenho que correr nessa porra</HabitDescription>
        </HabitHeaderInfo>
        <StabilityContainer>
          <StabilityIcon name='bar-chart' size={32} />
          <View>
            <StabilityLabel>ESTABILIDADE</StabilityLabel>
            <StabilityText>21%</StabilityText>
          </View>
          <LineChart
            data={data}
            width={250}
            height={80}
            chartConfig={chartConfig}
            bezier
            withDots={false}
          />
        </StabilityContainer>
      </HabitHeader>
      <CheckButtonContainer>
        <DoneImg source={require("../../assets/badge.png")} />
        <DoneInfoContainer>
          <DoneInfoTitle>Parabéns!</DoneInfoTitle>
          <DoneInfoDescription>
            Você já concluiu este hábito hoje!
          </DoneInfoDescription>
        </DoneInfoContainer>
      </CheckButtonContainer>
      <StarContainer>
        <StarImg source={require("../../assets/stars/black-hole.png")} />
        <StarInfo>
          <View>
            <StarDescription>Para você este hábito é um</StarDescription>
            <StarTitle>Buraco negro</StarTitle>
          </View>
          <NextStarDescription>
            alcance a estabilidade de 30% para o novo astro ser desbloqueado
          </NextStarDescription>
        </StarInfo>
      </StarContainer>
    </Container>
  );
};

export default Habit;
