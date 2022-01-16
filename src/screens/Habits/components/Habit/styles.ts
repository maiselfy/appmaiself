import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${RFPercentage(45)}px;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: 10px;
  padding: 10px;
`;
export const Color = styled.View`
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  margin-right: 10px;
  align-self: center;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const HabitTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text}
  font-size: ${RFValue(16)}px;
  max-width: ${RFPercentage(25)}px;
`;

export const Frequency = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-top: 10px;
`;
export const FrequencyCard = styled.View`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  background: ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  justify-content: center;
  align-items: center;
`;
export const FrequencyCardText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
export const StarContainer = styled.View`
  flex-direction: row;
`;
export const Star = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  align-items: center;
`;
export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding-left: 10px;
  margin-top:${RFValue(-4)}px;
`;
export const StabilityText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  margin-left: 10px;
`;