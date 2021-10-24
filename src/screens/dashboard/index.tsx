import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Text, View, SafeAreaView } from "react-native";
import ModuleItem from "./components/Module";
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
  ModulesContainer,
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
      <ModulesContainer>
        <ModuleItem
          title='Hábitos'
          description='Ver seus hábitos'
          image={require("../../assets/habitsLogo.png")}
        />
        <ModuleItem
          title='Tarefas'
          description='Ver suas tarefas'
          image={require("../../assets/tasksLogo.png")}
        />
        <ModuleItem
          title='Finanças'
          description='Ver suas finanças'
          image={require("../../assets/financesLogo.png")}
        />
        <ModuleItem
          title='Saúde'
          description='Ver sua saúde'
          image={require("../../assets/healthLogo.png")}
        />
      </ModulesContainer>
    </Container>
  );
};

export default Dashboard;