import { RectButton } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: ${RFPercentage(48)}px;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: 10px;
  padding: 10px;
`;
export const Color = styled.View`
  width: 12px;
  height: 12px;
  background: ${({ color }) => color};
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
  margin-bottom: 10px;
`;
export const FrequencyDay = styled.View`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  background: ${({ theme, checked }) =>
    checked ? theme.colors.success : theme.colors.attentionLight};
  border-width:  ${({ checked }) => (checked ? "0px" : "1px")}
  border-color:  ${({ theme, checked }) =>
    checked ? "transparent" : theme.colors.attention}
  border-radius: ${({ theme }) => theme.borderRadius.md};
  justify-content: center;
  align-items: center;
`;
export const FrequencyCard = styled.View`
  justify-content: center;
  align-items: center;
`;
export const FrequencyWeekDay = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 6px;
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
  margin-top: ${RFValue(-4)}px;
`;
export const StabilityText = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${RFValue(12)}px;
  margin-left: 10px;
`;