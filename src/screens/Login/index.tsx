import React, { useContext, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";
import Input from "../../components/form/Input";
import { LoginData, useAuth } from "../../hooks/useAuth";
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

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login: React.FC = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { signIn, signed } = useAuth();

  async function handleSignIn({ email, password }: LoginData) {
    signIn({ email, password });
  }

  return (
    <Container>
      <FormContainer>
        <Logo source={require("../../assets/logo.png")} />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Email'
              autoCapitalize='none'
              autoCorrect={false}
              // style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='email'
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Senha'
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
              // style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='password'
        />
        <ForgetPassword>
          <ForgetPasswordText> Esqueci minha senha</ForgetPasswordText>
        </ForgetPassword>
        <LoginBtn onPress={handleSubmit(handleSignIn)}>
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
