import React from "react";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Input from "../../components/form/Input";
import {
  Container,
  FormContainer,
  StepsContainer,
  TitleSectionSteps,
} from "./styles";

const Register: React.FC = () => {
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
            label="Primeira Etapa"
            bor
            nextBtnTextStyle={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: "bold",
            }}
            nextBtnStyle={{
              backgroundColor: "#6461FF",
              padding: 15,
              borderRadius: 10,
            }}
            nextBtnText="Próximo"
          >
            <StepsContainer>
              <TitleSectionSteps>Dados Pessoais</TitleSectionSteps>
              <Input
                placeholder="Digite seu nome"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Input
                placeholder="Digite seu sobrenome"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Input
                placeholder="Digite sua data de nascimento"
                autoCapitalize="none"
                keyboardType="phone-pad"
                autoCorrect={false}
                maxLength={10}
              />
            </StepsContainer>
          </ProgressStep>
          <ProgressStep
            label="Segunda Etapa"
            previousBtnTextStyle={{ color: "#6461FF", fontSize: 18 }}
            previousBtnStyle={{ padding: 15 }}
            nextBtnTextStyle={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: "bold",
            }}
            nextBtnStyle={{
              backgroundColor: "#6461FF",
              padding: 15,
              borderRadius: 10,
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
              />
              <Input
                placeholder="Digite sua senha"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />
              <Input
                placeholder="Confirme sua senha"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />
            </StepsContainer>
          </ProgressStep>
          <ProgressStep
            label="Terceira Etapa"
            previousBtnTextStyle={{ color: "#6461FF", fontSize: 18 }}
            previousBtnStyle={{ padding: 15 }}
            nextBtnTextStyle={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: "bold",
            }}
            nextBtnStyle={{
              backgroundColor: "#6461FF",
              padding: 15,
              borderRadius: 10,
            }}
            previousBtnText="Anterior"
            finishBtnText="Cadastrar"
          >
            <StepsContainer>
              <TitleSectionSteps>Dados Corporais</TitleSectionSteps>
              <Input
                placeholder="Digite sua altura"
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Input
                placeholder="Digite seu peso"
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </StepsContainer>
          </ProgressStep>
        </ProgressSteps>
      </FormContainer>
    </Container>
  );
};

export default Register;
