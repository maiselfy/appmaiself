import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(30)}px;
  background: ${({ theme }) => theme.colors.shape};
  flex-direction: column;
`;
export const UserInfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex: 1;
`;
export const WelcomeAgainMsg = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
`;
export const UserNameText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
`;
export const UserAvatar = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const UniverseBanner = styled.View`
  padding: 16px;
  margin-top: -${RFValue(60)}px;
  width: ${RFPercentage(45)}px;
  height: ${RFValue(100)}px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  justify-content: center;
`;
export const UniverseBannerTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 4px;
`;
export const UniverseDescription = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
`;
