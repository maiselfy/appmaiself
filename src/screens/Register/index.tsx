import React, { useState } from "react";
import { ToastAndroid } from "react-native";
import { parse } from "date-fns";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Input from "../../components/form/Input";
import {
  Container,
  FormContainer,
  StepsContainer,
  TitleSectionSteps,
} from "./styles";

import api from "../../api/api";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [birthdate, setBirthDate] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  async function handleRegister() {
    try {
      const response = await api.post("api/user", {
        name,
        lastname,
        email,
        password,
        birthdate: parse(birthdate, "dd/MM/yyyy", new Date()),
      });

      if (!response.data.message) {
        console.log("FUNFOU");
        console.log("RESPONSE => ", response.data);
        ToastAndroid.showWithGravity(
          "Novo usuário cadastrado com sucesso!!!",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      } else {
        console.log("FUNFOU NADA");
        console.log("RESPONSE => ", response.data);
        ToastAndroid.showWithGravity(
          `${response.data.message}`,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    } catch (error) {
      console.log("ERROR => ", error);
      ToastAndroid.showWithGravity(
        "Error interno no servidor! Por favor, tente novamente!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
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
              <Input
                placeholder="Digite seu nome"
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(name) => setName(name)}
              />
              <Input
                placeholder="Digite seu sobrenome"
                autoCapitalize="none"
                autoCorrect={false}
                value={lastname}
                onChangeText={(lastname) => setLastName(lastname)}
              />
              <Input
                placeholder="Digite sua data de nascimento"
                autoCapitalize="none"
                keyboardType="phone-pad"
                autoCorrect={false}
                maxLength={10}
                value={birthdate}
                onChangeText={(birthdate) => setBirthDate(birthdate)}
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
            nextBtnText="Próximo"
          >
            <StepsContainer>
              <TitleSectionSteps>Dados de Login</TitleSectionSteps>
              <Input
                placeholder="Digite seu e-mail"
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
                value={email}
                onChangeText={(email) => setEmail(email)}
              />
              <Input
                placeholder="Digite sua senha"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                value={password}
                onChangeText={(password) => setPassword(password)}
              />
              <Input
                placeholder="Confirmar sua senha"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={(confirmPassword) =>
                  setConfirmPassword(confirmPassword)
                }
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
            onSubmit={handleRegister}
          >
            <StepsContainer>
              <TitleSectionSteps>Dados Corporais</TitleSectionSteps>
              <Input
                placeholder="Digite sua altura"
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                value={height}
                onChangeText={(height) => setHeight(height)}
              />
              <Input
                placeholder="Digite seu peso"
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                value={weight}
                onChangeText={(weight) => setWeight(weight)}
              />
            </StepsContainer>
          </ProgressStep>
        </ProgressSteps>
      </FormContainer>
    </Container>
  );
};

export default Register;
