import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const CalendarContainer = styled.View`
  width: ${RFValue(320)}px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${RFValue(16)}px;
  margin-top: ${RFValue(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${RFValue(220)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const LeftArrowIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.textSecondary};
`;
export const RightArrowIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.textSecondary};
`;
export const MonthTxt = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const WeekRow = styled.View`
  flex-direction: row;
`;
export const DayButton = styled.TouchableOpacity`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ bg }) => bg}
`;
export const Dot = styled.View`
  width: ${RFValue(5)}px;
  height: ${RFValue(5)}px;
  background-color: ${({ theme, bg }) => bg}
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: ${({ display }) => display};
`;
export const DateTxt = styled.Text`
  color: ${({ theme, disabled }) =>
    !disabled ? theme.colors.text : theme.colors.shape};
`;
