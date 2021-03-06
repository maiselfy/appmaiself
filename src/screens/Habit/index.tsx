import React, { useState } from "react";
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
import Calendar from "../../components/calendar";
import { useRoute } from "@react-navigation/native";

const Habit: React.FC = ({ navigation }) => {
  const route = useRoute();
  const habitData = route.params.data;

  const [shouldReload, setShouldReload] = useState(false);
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
        data: habitData.stability.stabilityChartData,
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
          <HabitTitle>{habitData.name}</HabitTitle>
          <HabitDescription numberOfLines={1}>{habitData.description}</HabitDescription>
        </HabitHeaderInfo>
        <StabilityContainer>
          <StabilityIcon name='bar-chart' size={32} />
          <View>
            <StabilityLabel>ESTABILIDADE</StabilityLabel>
            <StabilityText>{habitData.stability.avg}%</StabilityText>
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
          <DoneInfoTitle>Parab??ns!</DoneInfoTitle>
          <DoneInfoDescription>
            Voc?? j?? concluiu este h??bito hoje!
          </DoneInfoDescription>
        </DoneInfoContainer>
      </CheckButtonContainer>
      <StarContainer>
        <StarImg source={require("../../assets/stars/black-hole.png")} />
        <StarInfo>
          <View>
            <StarDescription>Para voc?? este h??bito ?? um</StarDescription>
            <StarTitle>Buraco negro</StarTitle>
          </View>
          <NextStarDescription>
            alcance a estabilidade de 30% para o novo astro ser desbloqueado
          </NextStarDescription>
        </StarInfo>
      </StarContainer>
      <Calendar
        habitId={habitData.id}
        shouldReload={shouldReload}
        setShouldReload={setShouldReload}
      />
    </Container>
  );
};

export default Habit;
