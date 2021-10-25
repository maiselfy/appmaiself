import React from "react";
import { TextInputProps, View } from "react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

const Input: React.FC<TextInputProps> = ({ ...rest }) => {
  const theme = useTheme();
  return (
    <Container {...rest} placeholderTextColor={theme.colors.textSecondary} />
  );
};

export default Input;
