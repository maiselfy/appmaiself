import React from "react";
import { View } from "react-native";
import Input from '../../components/form/Input'
import { Container, FormContainer, LoginBtn,Logo,LoginButtonText } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <Logo source={require("../../assets/logo.png")}/>
        <Input placeholder='Email' />
        <Input placeholder='Senha' secureTextEntry />
        <LoginBtn>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginBtn>
      </FormContainer>
    </Container>
  );
};

export default Login;
