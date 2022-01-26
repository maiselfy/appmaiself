import React, { useEffect, useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Text, View, SafeAreaView, Button } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import {
  Container,
  Header,
  UserInfoContainer,
  WelcomeAgainMsg,
  UserNameText,
  UserAvatar,
  UniverseBanner,
  UniverseBannerTitle,
  UniverseDescription,
  ModulesContainer,
  GalaxyImage,
  BannerInfo,
  BalanceBtn,
  ValueBalanceButtonText,
  BalanceButtonText,
  AddFinanceBtn,
  AddInputButtonText,
  AddOutputButtonText,
  FinancesText,
  FinanceBtn,
  DescriptionBalanceButtonText,
  DaysBalanceButtonText,
  ValueFinanceButtonText,
  ActionsButtons,
  FinancesList,
  IconFinance,
  FinanceComponent,
  FinanceTextComponent,
  FinanceList
} from "./styles";

import Finance from "./components/Finance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../api/api";


export enum TypeFinance {
  INPUT = 'input',
  OUTPUT = 'output',
}

export interface Finance {
  description: string;
  value: number;
  date: Date;
  status: boolean;
  type: TypeFinance;
  user_id: string;
}

const Finances: React.FC = ({navigation}) => {
  const { user } = useAuth();
  const [finances, setFinances] = useState<Finance[]>([]);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    async function getFinances() {
      if (user) {
        const token = await AsyncStorage.getItem("token");
        api
          .get(`api/finance/list/${user.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => setFinances(response.data));
      }
    }

    async function getBalance() {
      if (user) {
        const token = await AsyncStorage.getItem("token");
        console.log(user)
        api
          .get(`api/finance/balance/${user.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => setBalance(response.data));
      }
    }
    getFinances();
    getBalance();
  }, []);

  return (
    <Container>
      <BalanceBtn>
        <ValueBalanceButtonText>
        R$ {balance}
        </ValueBalanceButtonText>
        <BalanceButtonText>
        seu saldo
        </BalanceButtonText>
      </BalanceBtn>

      <ActionsButtons>
        <AddFinanceBtn onPress={() => navigation.navigate('NewFinance', 'INPUT')}>
        <IconFinance source={require("../../assets/money.png")}/>
          <AddInputButtonText>
            Adicionar Receita
          </AddInputButtonText>
        </AddFinanceBtn>

        <AddFinanceBtn onPress={() => navigation.navigate('NewFinance', 'OUTPUT')}>
        <IconFinance source={require("../../assets/decrease.png")}/>
          <AddOutputButtonText>
            Adicionar Despesa
          </AddOutputButtonText>
        </AddFinanceBtn>
      </ActionsButtons>

      <FinancesText>
        Todos os registros 
      </FinancesText>

      <FinanceList
        data={finances}
        renderItem={(item) => <Finance data={item.item} key={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />

    </Container>
  );
};

export default Finances;
