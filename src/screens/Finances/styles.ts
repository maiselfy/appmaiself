import { Button } from "react-native";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  justify-content: center;
`;

export const ActionsButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${RFPercentage(2)}px;
`;

export const BalanceBtn = styled(RectButton)`
  height: ${RFValue(108)}px;
  width: ${RFPercentage(45)}px;
  background: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: ${RFPercentage(13)}px;
`;

export const ValueBalanceButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(22)}px;
  margin-bottom: ${RFPercentage(2)}px;
`;

export const BalanceButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
`;

export const FinancesList = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: ${RFPercentage(1)}px;
`;

export const FinanceComponent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${RFPercentage(1)}px;
`;

export const AddFinanceBtn = styled(RectButton)`
  height: ${RFValue(56)}px;
  width: ${RFPercentage(21)}px;
  background: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-right: ${RFPercentage(1.2)}px;
  margin-left: ${RFPercentage(1.2)}px;
  flex-direction: row;
`;

export const AddInputButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
`;

export const AddOutputButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
`;

export const FinancesText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(17)}px;
  margin-top: ${RFPercentage(1)}px;
  margin-left: ${RFPercentage(2)}px;
  margin-top: ${RFPercentage(3)}px;
`;

export const IconFinance = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  align-self: center;
  margin-right: ${RFPercentage(1.2)}px;
`;

export const FinanceBtn = styled(RectButton)`
  height: ${RFValue(58)}px;
  width: ${RFPercentage(43)}px;
  background: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const FinanceTextComponent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: ${RFPercentage(2)}px;
  margin-right: ${RFPercentage(7)}px;
`;

export const DescriptionBalanceButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
`;

export const DaysBalanceButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
`;

export const ValueFinanceButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const FinanceList = styled.FlatList`
  margin-top: 10px;
`;















export const RegisterButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(14)}px;
  align-items: center;
  margin-left: 17;
  margin-right: 17;
`;

export const LoginGoogleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`;

export const ForgetPassword = styled(RectButton)`
  height: ${RFValue(20)}px;
  width: ${RFPercentage(40)}px;
  justify-content: flex-start;
  margin-top: ${RFPercentage(-2)}px;
`;

export const ForgetPasswordText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
`;

export const DiscoveryMaiself = styled(RectButton)`
  height: ${RFValue(50)}px;
  width: ${RFPercentage(42)}px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFPercentage(5)}px;
`;

export const DiscoveryMaiselfText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;

export const RegisterMaiselfText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(12)}px;
`;

export const Logo = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(130)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const IconGoogle = styled.Image`
  width: ${RFValue(70)}px;
  height: ${RFValue(50)}px;
`;


