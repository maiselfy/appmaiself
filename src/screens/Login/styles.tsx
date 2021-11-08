import { Button } from "react-native";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  justify-content: center;

`;

export const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  background: ${({ theme }) => theme.colors.shape};
  justify-content: center;
  align-items: center;
`;
export const LoginBtn = styled(RectButton)`
  height: ${RFValue(50)}px;
  width: ${RFPercentage(40)}px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  align-items: center;
  justify-content: center;
`;
export const LoginButtonText = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`
export const Logo = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(130)}px;
  margin-bottom: ${RFValue(20)}px;
`;
