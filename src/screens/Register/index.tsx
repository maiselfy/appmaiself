import React, { useState } from "react";
//import { ToastAndroid } from "react-native";
import { parse } from "date-fns";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Input from "../../components/form/Input";
import { useAuth } from "../../hooks/useAuth";
import {
  Container,
  FormContainer,
  StepsContainer,
  TitleSectionSteps,
} from "./styles";

import api from "../../api/api";
import { Controller } from "react-hook-form";

const registerSchema = yup.object({
  name: yup.string().required(),
  lastname: yup.string().required(),
  birthdate: yup.date().required(),
  email: yup.string().email().required(),
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Register: React.FC = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { registerUser, user } = useAuth();

  async function handleRegister({ name, lastname, birthdate, email, password, passwordConfirmation }: RegisterData) {
    registerUser();
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
              <Controller>
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
              </Controller>
              <Controller>
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
              </Controller>

              <Controller>
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
              </Controller>
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
              <Controller>
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
              </Controller>
              <Controller>
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
              </Controller>

              <Controller>
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
                name='confirmPassword'
              </Controller>
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
            onSubmit={handleRegister}
          >
            <StepsContainer>
              <TitleSectionSteps>Dados Corporais</TitleSectionSteps>
              <Controller>
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
              </Controller>

              <Controller>
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
              </Controller>
            </StepsContainer>
          </ProgressStep>
        </ProgressSteps>
      </FormContainer>
    </Container>
  );
};

export default Register;
