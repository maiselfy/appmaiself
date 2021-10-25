import React from "react";
import { View } from "react-native";
import Input from "../../components/form/Input";

import { Container, FormContainer, LoginBtn } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <Input placeholder='Email' />
        <Input placeholder='Senha' secureTextEntry />
        <LoginBtn title='entrar' />
      </FormContainer>
    </Container>
  );
};

export default Login;
