import { RectButton } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
`;
export const Header = styled.SafeAreaView`
  width: 100%;
  height: ${RFPercentage(25)}px;
  background: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const AllHabitsTxt = styled.Text`
  color: ${({ theme }) => theme.colors.text}
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold}
`;
export const TitleContainer = styled.View`
  justify-content: flex-start;
  width: ${RFPercentage(48)}px;
  margin-top: ${RFValue(24)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-left: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text}
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const Logo = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  margin-right: ${RFValue(16)}px;
`;
export const HabitList = styled.FlatList`
  margin-top: 10px;
`;

export const NewHabitButton = styled(RectButton)`
  height: ${RFValue(50)}px;
  width: ${RFPercentage(45)}px;
  margin-top: -30px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  align-items: center;
  justify-content: center;
`;
export const NewHabitButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const HabitsStatsContainer = styled.View`
  margin-top: 30px;
  width: ${RFPercentage(48)}px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
export const StatItem = styled.View`
  align-items: center;
`;
export const StatItemLabel = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${RFValue(8)}px;
`;
export const StatItemTxt = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`;
