import React from 'react';

import Tabs from '~/components/Tabs';
import Header from '~/components/Header';

import {
  Card,
  Title,
  Content,
  Container,
  Annotation,
  CardFooter,
  CardHeader,
  CardContent,
  Description,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>

          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 117.611,56</Description>
          </CardContent>

          <CardFooter>
            <Annotation>
              Transferência de R$ 11.122,00 recebida de Thiago André Peres Primo
              hoje as 15:23h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
