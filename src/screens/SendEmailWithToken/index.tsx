import React from "react";
import Input from "../../components/form/Input";
import {
  Container,
  FormContainer,
  Logo,
  LoginBtn,
  LoginButtonText,
} from "./styles";

const SendEmailWithToken: React.FC = () => {
  async function handleSendWithEmail() {}

  return (
    <Container>
      <FormContainer>
        <Logo source={require("../../assets/logo.png")} />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <LoginBtn onPress={handleSendWithEmail}>
          <LoginButtonText>Enviar</LoginButtonText>
        </LoginBtn>
      </FormContainer>
    </Container>
  );
};

export default SendEmailWithToken;
