import { TextInput } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  width: ${RFPercentage(40)}px;
  height: ${RFValue(44)}px;
  padding: 16px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md}
  color: ${({ theme }) => theme.colors.text}
  margin-bottom:${RFValue(20)}px;
`;
