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
  height: ${RFPercentage(20)}px;
  background: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
