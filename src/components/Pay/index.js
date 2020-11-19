import React from 'react';

import {
  Border,
  Container,
  SubContent,
  WrapContent,
  TextContent,
  SubTextContent,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import HeaderContentPage from '~/components/HeaderContentPage';

function Pay() {
  return (
    <Container>
      <HeaderContentPage />

      <WrapContent>
        <SubContent>
          <Icon name="credit-card" size={35} color="#612f74" />
          <TextContent>Pagar fatura do cartão</TextContent>
          <Icon name="keyboard-arrow-right" size={35} color="#a9a9a9" />
        </SubContent>
        <SubTextContent>
          Gere um boleto ou pague com a conta do Nubank
        </SubTextContent>
      </WrapContent>

      <Border />

      <WrapContent>
        <SubContent>
          <Icon name="qr-code" size={35} color="#612f74" />
          <TextContent style={{marginLeft: -45}}>Pagar um boleto</TextContent>
          <Icon name="keyboard-arrow-right" size={35} color="#a9a9a9" />
        </SubContent>
        <SubTextContent style={{marginLeft: -75}}>
          Contas de água, luz, etc
        </SubTextContent>
      </WrapContent>
    </Container>
  );
}

export default Pay;
