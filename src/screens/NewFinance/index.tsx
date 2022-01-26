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
  IconGoogle,
  AddFinanceButtonText,
  FinanceBtn,
  FinanceBtnTwo,
} from "./styles";

import { AsyncStorage, Button, StatusBar } from "react-native";
import { StackActions, useNavigation, useRoute } from "@react-navigation/native";
import { NavigationActions } from "react-navigation";

import { AddFinanceBtn } from "../Finances/styles";
import api from "../../api/api";

const addFinanceSchema = yup.object({
  description: yup.string().required(),
  value: yup.number().required(),
  date: yup.date().required(),
  status: yup.string().required(),
  type: yup.string().required,
});

const NewFinance: React.FC = ({navigation}) => {
  const { control, handleSubmit, getValues } = useForm({
    resolver: yupResolver(addFinanceSchema),
  });

  const route = useRoute()
  const typeFinance = route.params


  async function handleAddFinance() {
    const descriptionSub = getValues("description")
    const valueSub = getValues("value")
    const dateSub = getValues("date")
    const statusSub = getValues("status")
    const typeSub = typeFinance

    addFinance({descriptionSub, valueSub, dateSub, statusSub, typeSub})
  }

  async function addFinance({descriptionSub, valueSub, dateSub, statusSub, typeSub}) {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);

      const user = await api.get("api/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const user_id = user.data.id

      const response = await api.post("api/finance", {
        description:descriptionSub, value: valueSub, date:dateSub, status:statusSub, user_id, type:typeSub 
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status) {
        navigation.navigate('Finances')
        
      } else {
        console.log("RESPONSE ERROR=> ", response.data);
      }
    } catch (error) {
      console.log("ERROR => ", error);
      /*
      ToastAndroid.showWithGravity(
        "Error interno no servidor! Por favor, tente novamente!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      */
    }
  }

  return (
    <Container>
      <FormContainer>
        <Logo source={require("../../assets/financesLogo.png")} />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Descrição'
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
              placeholder='Valor'
              autoCapitalize='none'
              autoCorrect={false}
              // style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='value'
        />
          <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Data'
              autoCapitalize='none'
              autoCorrect={false}
              // style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='date'
          />
          <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Status'
              autoCapitalize='none'
              autoCorrect={false}
              // style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='status'
          />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              defaultValue={typeFinance}
              editable={false}
              placeholder='Tipo'
              autoCapitalize='none'
              autoCorrect={false}
              // style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='type'
        />

       {
          typeFinance == 'OUTPUT' && (
            <FinanceBtnTwo onPress={handleSubmit(handleAddFinance)}>
              <AddFinanceButtonText>Adicionar</AddFinanceButtonText>
            </FinanceBtnTwo>
          )
       }

       {
          typeFinance === 'INPUT' && (
            <FinanceBtn onPress={handleSubmit(handleAddFinance)}>
              <AddFinanceButtonText>Adicionar</AddFinanceButtonText>
            </FinanceBtn>
          )
       }  
      </FormContainer>
    </Container>
  );
};

export default NewFinance;
