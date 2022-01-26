import React from "react";
import { addDays, format, formatDistance, subDays } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { ImageSourcePropType, Text, View } from "react-native";

import { Finance as FinanceData } from "../../components/Finance";
import { Container, DaysBalanceButtonText, DescriptionBalanceButtonText, FinanceBtn, FinanceComponent, FinanceTextComponent, IconFinance, ValueFinanceButtonText } from "../../styles";


interface FinanceProps {
  data: FinanceData;
}

const Finance: React.FC<FinanceProps> = ({ data }) => {
  const dataFormatted = formatDistance(subDays(new Date(), 3), new Date(data.date), {locale: ptBr, addSuffix: true})

  return (
    <Container>
      <FinanceComponent>
          <FinanceBtn>
            <IconFinance source={require("../../../../assets/money-bag.png")}/>
            <FinanceTextComponent>
              <DescriptionBalanceButtonText>
                {data.description}
              </DescriptionBalanceButtonText>
              <DaysBalanceButtonText>
              {dataFormatted}
              </DaysBalanceButtonText>
            </FinanceTextComponent>
            <ValueFinanceButtonText>
              {`R$ ${data.value}`}
            </ValueFinanceButtonText>
          </FinanceBtn>
        </FinanceComponent>
    </Container>
  );
};

export default Finance;
