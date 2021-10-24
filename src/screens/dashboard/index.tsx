import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import {
  Container,
  Header,
  UserInfoContainer,
  WelcomeAgainMsg,
  UserNameText,
  UserAvatar,
  UniverseBanner,
  UniverseBannerTitle,
  UniverseDescription,
} from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <UserInfoContainer>
          <View>
            <WelcomeAgainMsg>Olá novamente 👋🏻</WelcomeAgainMsg>
            <UserNameText>Marcos Gênesis</UserNameText>
          </View>
          <UserAvatar
            source={{
              uri: "https://avatars.githubusercontent.com/marcosgenesis",
            }}
          />
        </UserInfoContainer>
      </Header>
      <UniverseBanner>
          <UniverseBannerTitle>Veja como está seu universo</UniverseBannerTitle>
          <UniverseDescription>
            Aperte aqui para visualizar o universo contruído por voce até agora
          </UniverseDescription>
        </UniverseBanner>
    </Container>
  );
};

export default Dashboard;
