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

export const FinanceBtn = styled(RectButton)`
  height: ${RFValue(50)}px;
  width: ${RFPercentage(40)}px;
  background: #37CB95;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(1)}px;
`;

export const FinanceBtnTwo = styled(RectButton)`
  height: ${RFValue(50)}px;
  width: ${RFPercentage(40)}px;
  background: #DE3C63;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(1)}px;
`;

export const AddFinanceButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`;

export const Logo = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  margin-bottom: ${RFValue(30)}px;
`;



