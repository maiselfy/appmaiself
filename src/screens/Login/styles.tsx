import { Button } from "react-native";
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
`;
export const LoginBtn = styled(Touchaop)`
`;
