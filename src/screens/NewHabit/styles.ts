import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.default}
  height: ${RFValue(90)}px;
  justify-content:center;
  align-items:center;
`;

export const HeaderText = styled.Text`
color: ${({ theme }) => theme.colors.text}
font-family: ${({ theme }) => theme.fonts.bold}
font-size: ${RFValue(16)}px;
`;
export const Content = styled.View`
  padding: ${RFValue(20)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const AddBtn = styled(RectButton)`
background: ${({ theme }) => theme.colors.primary}
width: 90%;
height: ${RFValue(44)}px;
border-radius: ${({ theme }) => theme.borderRadius.md};
justify-content: center;
align-items: center;
`;

export const AddBtnText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
