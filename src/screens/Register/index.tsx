import React, { useState } from "react";
//import { ToastAndroid } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { parse } from "date-fns";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import * as yup from "yup";
import Input from "../../components/form/Input";
import { RegisterData, useAuth } from "../../hooks/useAuth";
import {
  Container,
  FormContainer,
  StepsContainer,
  TitleSectionSteps,
} from "./styles";

import api from "../../api/api";

const registerSchema = yup.object({
  name: yup.string().required(),
  lastname: yup.string().required(),
  birthdate: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  height: yup.number().required(),
  weight: yup.number().required(),
});

const Register: React.FC = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { registerUser, user } = useAuth();

  async function handleRegister({ name, lastname, birthdate, email, password }: RegisterData) {
    registerUser({name, lastname, birthdate, email, password});
  }

  return (
    <Container>
      <FormContainer>
        <ProgressSteps
          activeStepIconBorderColor="#6461FF"
          progressBarColor="#6461FF"
          completedProgressBarColor="#6461FF"
          completedStepIconColor="#6461FF"
          disabledStepIconColor="#6461FF"
          activeLabelColor="#6461FF"
          activeStepNumColor="#6461FF"
          scrollable="false"
        >
          <ProgressStep
            label="Pessoal"
            bor
            nextBtnTextStyle={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: "bold",
              width: 200,
              textAlign: "center",
            }}
            nextBtnStyle={{
              backgroundColor: "#6461FF",
              padding: 15,
              borderRadius: 10,
              marginBottom: 65,
            }}
            nextBtnText="Próximo"
          >
            <StepsContainer>
              <TitleSectionSteps>Dados Pessoais</TitleSectionSteps>
              <Controller 
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <Input
                placeholder="Digite seu nome"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
                )}
                name='name'
              />
              <Controller 
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <Input
                placeholder="Digite seu sobrenome"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
                )}
                name='lastname'
              />
              <Controller 
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <Input
                placeholder="Digite sua data de nascimento"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
                )}
                name='birthdate'
              />
            </StepsContainer>
          </ProgressStep>

          <ProgressStep
            label="Login"
            previousBtnTextStyle={{
              color: "#6461FF",
              fontSize: 18,
              width: 200,
              textAlign: "center",
            }}
            previousBtnStyle={{ 
              padding: 15, 
              borderRadius: 10,
              backgroundColor: "#fff",
            }}
            nextBtnTextStyle={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: "bold",
              width: 200,
              textAlign: "center",
            }}
            nextBtnStyle={{
              backgroundColor: "#6461FF",
              padding: 15,
              borderRadius: 10,
              marginBottom: 65,
            }}
            previousBtnText="Anterior"
            nextBtnText="Próximo"
          >
            <StepsContainer>
              <TitleSectionSteps>Dados de Login</TitleSectionSteps>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <Input
                placeholder="Digite seu e-mail"
                autoCapitalize="none"
                autoCorrect={false}
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
                placeholder="Digite sua senha"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
                )}
                name='password'
              />
              <Controller 
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <Input
                placeholder="Confirme sua senha"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
                )}
                name='passwordConfirmation'
              />
            </StepsContainer>
          </ProgressStep>

          <ProgressStep
            label="Corporal"
            previousBtnTextStyle={{
              color: "#6461FF",
              fontSize: 18,
              width: 200,
              textAlign: "center",
            }}
            previousBtnStyle={{ padding: 15 }}
            nextBtnTextStyle={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: "bold",
              width: 200,
              textAlign: "center",
            }}
            nextBtnStyle={{
              backgroundColor: "#6461FF",
              padding: 15,
              borderRadius: 10,
              marginBottom: 65,
            }}
            previousBtnText="Anterior"
            finishBtnText="Cadastrar"
            onSubmit={handleSubmit(handleRegister)}
          >
            <StepsContainer>
              <TitleSectionSteps>Dados Corporais</TitleSectionSteps>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <Input
                placeholder="Digite sua altura (cm)"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
                )}
                name='height'
              />

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <Input
                placeholder="Digite seu peso (kg)"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
                )}
                name='weight'
              />
              
            </StepsContainer>
          </ProgressStep>

        </ProgressSteps>
      </FormContainer>
    </Container>
  );
};

export default Register;
