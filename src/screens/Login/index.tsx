import React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import Input from '../../components/form/Input'
import { useAuth } from "../../hooks/useAuth";
import { Container, FormContainer, LoginBtn,Logo,LoginButtonText } from "./styles";

const Login: React.FC = () => {
  const {signIn} = useAuth()
  const {register,handleSubmit} = useForm()
  const handleSignIn:SubmitHandler<any> = (data) => {
    console.log(data);
  }
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(handleSignIn)}>
        <Logo source={require("../../assets/logo.png")}/>
        <Input placeholder='Email' autoComplete="email" autoCapitalize="none" />
        <Input placeholder='Senha' secureTextEntry />
        <LoginBtn>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginBtn>
      </FormContainer>
    </Container>
  );
};

export default Login;
