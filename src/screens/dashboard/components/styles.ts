import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Module = styled.View`
  width: ${RFValue(136)}px;
  height: ${RFValue(136)}px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(16)}px;
  margin-top: ${RFValue(16)}px;
`;

export const ModuleTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: ${RFValue(10)}px;
`;

export const ModuleDescription = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
  margin-top: ${RFValue(4)}px;
`;

export const ModuleSeeMore = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowRightIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${RFValue(4)}px;
`;

export const ModuleImg = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
`;
