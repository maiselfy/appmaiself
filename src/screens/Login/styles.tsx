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
  margin-top: ${RFPercentage(3)}px;
`;

export const LoginGoogleBtn = styled(RectButton)`
  height: ${RFValue(50)}px;
  width: ${RFPercentage(40)}px;
  background: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  align-items: center;
  align-self: center;
  flex-direction: row;
  margin-top: ${RFPercentage(5)}px;
`;

export const LoginButtonText = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`

export const LoginGoogleText = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`

export const ForgetPassword = styled(RectButton)`
  height: ${RFValue(20)}px;
  width: ${RFPercentage(40)}px;
  justify-content: flex-start;
  margin-top: ${RFPercentage(-2)}px;
`;

export const ForgetPasswordText = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
`

export const DiscoveryMaiself = styled(RectButton)`
  height: ${RFValue(50)}px;
  width: ${RFPercentage(42)}px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFPercentage(5)}px;
`;

export const DiscoveryMaiselfText = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`

export const RegisterMaiselfText = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(12)}px;
`

export const Logo = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(130)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const IconGoogle = styled.Image`
  width: ${RFValue(70)}px;
  height: ${RFValue(50)}px;
`;
