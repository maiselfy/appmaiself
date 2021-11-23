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

export const TitleSectionSteps = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const StepsContainer = styled.View`
  flex: 1;
  width: 100%;
  height: ${RFPercentage(70)}px;
  justify-content: center;
  align-items: center;
`;
