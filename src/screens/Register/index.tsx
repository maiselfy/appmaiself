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
            label="First Step"
            bor
            nextBtnTextStyle={{ color: "#6461FF", fontSize: 18 }}
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
                autoCorrect={false}
              />
            </StepsContainer>
          </ProgressStep>
          <ProgressStep
            label="Second Step"
            nextBtnTextStyle={{ color: "#6461FF", fontSize: 18 }}
            previousBtnTextStyle={{ color: "#6461FF", fontSize: 18 }}
            previousBtnText="Anterior"
            nextBtnText="Próximo"
          >
            <StepsContainer>
              <TitleSectionSteps>Dados de Login</TitleSectionSteps>
              <Input
                placeholder="Digite seu e-mail"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Input
                placeholder="Digite sua senha"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Input
                placeholder="Confirme sua senha"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </StepsContainer>
          </ProgressStep>
          <ProgressStep
            label="Third Step"
            nextBtnTextStyle={{ color: "#6461FF", fontSize: 18 }}
            previousBtnTextStyle={{ color: "#6461FF", fontSize: 18 }}
            previousBtnText="Anterior"
            finishBtnText="Cadastrar"
          >
            <StepsContainer>
              <TitleSectionSteps>Dados Corporais</TitleSectionSteps>
              <Input
                placeholder="Digite sua altura"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Input
                placeholder="Digite seu peso"
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
