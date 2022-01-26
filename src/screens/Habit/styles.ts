import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: ${RFValue(8)}px;
`;
export const HabitHeader = styled.View`
  width: ${RFPercentage(45)}px;
  height: ${RFValue(150)}px;
  padding: ${RFValue(8)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.shape};
  padding-bottom: ${RFValue(36)}px;
`;
export const HabitHeaderInfo = styled.View`
  width: ${RFPercentage(40)}px;
  align-items: center;
  flex: 1;
`;
export const HabitTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text}
  font-family: ${({ theme }) => theme.fonts.bold}
  font-size: ${RFValue(16)}px;
`;
export const HabitDescription = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
`;
export const StabilityContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const StabilityLabel = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-right: ${RFValue(-50)}px;
`;
export const StabilityText = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: ${RFValue(-50)}px;
`;
export const StabilityIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-right: ${RFValue(4)}px;
`;
export const CheckButtonContainer = styled(RectButton)`
  width: ${RFPercentage(39)}px;
  height: ${RFValue(60)}px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.default};
  margin-top: ${RFValue(-30)}px;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(8)}px;
  flex-direction: row;
`;
export const DoneImg = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
`;
export const DoneInfoContainer = styled.View`
  margin-left: ${RFValue(8)}px;
`;
export const DoneInfoTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;
export const DoneInfoDescription = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StarContainer = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(16)}px;
`;
export const StarImg = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  z-index: 1;
`;

export const StarInfo = styled.View`
  padding: ${RFValue(8)}px;
  margin-left: ${RFValue(-16)}px;
  background: ${({ theme }) => theme.colors.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: ${RFPercentage(35)}px;
  justify-content: center;
  padding-left: ${RFValue(24)}px;
`;
export const StarDescription = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${RFValue(12)}px;
`;
export const StarTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: ${RFValue(12)}px;
`;
export const NextStarDescription = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${RFValue(10)}px;
`;
