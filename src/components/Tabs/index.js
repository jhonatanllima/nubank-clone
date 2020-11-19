import React from 'react';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';

function Tabs({translateY}) {
  const {navigate} = useNavigation();

  function handleNavigationToPixPage() {
    navigate('Pix');
  }

  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 390],
              outputRange: [0, 20],
              extrapolate: 'clamp',
            }),
          },
        ],

        opacity: translateY.interpolate({
          inputRange: [0, 390],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabItem onPress={handleNavigationToPixPage}>
          <Icon name="widgets" size={24} color={'#FFF'} />
          <TabText>Pix</TabText>
        </TabItem>

        <TabItem>
          <Icon name="qr-code" size={24} color={'#FFF'} />
          <TabText>Pagar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="person-add" size={24} color={'#FFF'} />
          <TabText>Indicar amigos</TabText>
        </TabItem>

        <TabItem>
          <Icon name="transfer-within-a-station" size={24} color={'#FFF'} />
          <TabText>Transferir</TabText>
        </TabItem>

        <TabItem>
          <Icon name="attach-money" size={24} color={'#FFF'} />
          <TabText>Depositar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="account-balance" size={24} color={'#FFF'} />
          <TabText>Empréstimos</TabText>
        </TabItem>

        <TabItem>
          <Icon name="credit-card" size={24} color={'#FFF'} />
          <TabText>Cartão Virtual</TabText>
        </TabItem>

        <TabItem>
          <Icon name="smartphone" size={24} color={'#FFF'} />
          <TabText>Recarga de celular</TabText>
        </TabItem>

        <TabItem>
          <Icon name="tune" size={24} color={'#FFF'} />
          <TabText>Ajustar limite</TabText>
        </TabItem>

        <TabItem>
          <Icon name="lock-open" size={24} color={'#FFF'} />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>

        <TabItem>
          <Icon name="attach-money" size={24} color={'#FFF'} />
          <TabText>Cobrar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="thumb-up" size={24} color={'#FFF'} />
          <TabText>Doação</TabText>
        </TabItem>

        <TabItem>
          <Icon name="help-outline" size={24} color={'#FFF'} />
          <TabText>Me ajuda</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}

export default Tabs;
