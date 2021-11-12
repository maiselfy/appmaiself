import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${RFPercentage(50)}px;
  background: ${({ theme }) => theme.colors.shape};
`;
export const Color = styled.View`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
`;
export const HabitTitle = styled.Text``;
export const Frequency = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;
export const FrequencyCard = styled.View`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  background: ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
