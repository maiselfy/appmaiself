import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import Input from "../../components/form/Input";
import { useAuth } from "../../hooks/useAuth";
import {
  Container,
  FormContainer,
  LoginBtn,
  Logo,
  LoginButtonText,
  ForgetPassword,
  ForgetPasswordText,
  DiscoveryMaiself,
  DiscoveryMaiselfText,
  RegisterMaiselfText,
  LoginGoogleBtn,
  IconGoogle,
} from "./styles";

import { AsyncStorage, Button, StatusBar } from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import { NavigationActions } from "react-navigation";

import api from "../../api/api";

const Login: React.FC = () => {
  const { signIn, signed } = useAuth();

  async function handleSignIn() {
    signIn();
  }

  return (
    <Container>
      <FormContainer>
        <Logo source={require("../../assets/logo.png")} />
        <Input placeholder="Email" autoCapitalize="none" autoCorrect={false} />
        <Input
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
        <ForgetPassword>
          <ForgetPasswordText> Esqueci minha senha</ForgetPasswordText>
        </ForgetPassword>
        <LoginBtn onPress={handleSignIn}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginBtn>
        <DiscoveryMaiself>
          <DiscoveryMaiselfText>
            {" "}
            Ainda não conhece a Maiself ? 🤔
          </DiscoveryMaiselfText>
          <RegisterMaiselfText>
            Clique aqui para conhecer e mudar de vida! 🚀
          </RegisterMaiselfText>
        </DiscoveryMaiself>
        <LoginGoogleBtn>
          <IconGoogle source={require("../../assets/google.png")} />
          <LoginButtonText>Entrar com o Google</LoginButtonText>
        </LoginGoogleBtn>
      </FormContainer>
    </Container>
  );
};

export default Login;
