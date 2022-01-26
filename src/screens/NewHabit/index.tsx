import React from "react";
import { Controller, useForm } from "react-hook-form";
import { AsyncStorage, View } from "react-native";
import api from "../../api/api";
import Input from "../../components/form/Input";
import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  Header,
  HeaderText,
  Content,
  AddBtn,
  AddBtnText,
} from "./styles";
/**
 * 
 * await api.post('/habit', {
      user_id: user?.id,
      buddy_id: buddyId,
      name: habitData.habitName,
      description: habitData.description,
      objective: habitData.objective,
      color,
    });
 */
const NewHabit: React.FC = () => {
  const { control, handleSubmit } = useForm({});
  const { user } = useAuth();

  const HandleNewHabit = (data: any) => {
    async function qualquer() {
      api
        .post(
          "api/habit",
          {
            user_id: user?.id,
            buddy_id: null,
            name: data.name,
            description: data.description,
            objective: data.objective,
            color: "#7159c1",
          },
          {
            headers: {
              Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => alert("Habito Cadastrado"))
        .catch((error) => alert("Não conseguimos cadastrar este hábito"));
    }
    qualquer();
  };

  return (
    <Container>
      <Header>
        <HeaderText>Novo Hábito</HeaderText>
      </Header>
      <Content>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Nome do Hábito'
              autoCapitalize='none'
              autoCorrect={false}
              // style={styles.input}
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
              placeholder='Descrição do Hábito'
              autoCapitalize='none'
              autoCorrect={false}
              // style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='description'
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Objetivo do Hábito'
              autoCapitalize='none'
              autoCorrect={false}
              // style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='objective'
        />
        <AddBtn onPress={handleSubmit(HandleNewHabit)}>
          <AddBtnText>Adicionar</AddBtnText>
        </AddBtn>
      </Content>
    </Container>
  );
};

export default NewHabit;
