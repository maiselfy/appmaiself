import React from "react";
import Input from "../../components/form/Input";
import {
  Container,
  FormContainer,
  Logo,
  LoginBtn,
  LoginButtonText,
} from "./styles";

const ResetPassword: React.FC = () => {
  async function handleSendWithEmail() {}

  return (
    <Container>
      <FormContainer>
        <Logo source={require("../../assets/logo.png")} />
        <Input placeholder="Token" autoCapitalize="none" autoCorrect={false} />
        <Input
          placeholder="Senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <Input
          placeholder="Confirmar senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <LoginBtn onPress={handleSendWithEmail}>
          <LoginButtonText>Redefinir</LoginButtonText>
        </LoginBtn>
      </FormContainer>
    </Container>
  );
};

export default ResetPassword;
