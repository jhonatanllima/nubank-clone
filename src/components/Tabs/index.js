import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';

function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color={'#FFF'} />
          <TabText>Indicar amigos</TabText>
        </TabItem>

        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color={'#FFF'} />
          <TabText>Cobrar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="attach-money" size={24} color={'#FFF'} />
          <TabText>Depositar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="transfer-within-a-station" size={24} color={'#FFF'} />
          <TabText>Transferência</TabText>
        </TabItem>

        <TabItem>
          <Icon name="lock" size={24} color={'#FFF'} />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}

export default Tabs;
