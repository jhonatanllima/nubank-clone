import React from 'react';

import QrCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Code,
  Nav,
  NavItem,
  NavText,
  Container,
  SignOutButton,
  SignOutButtonText,
} from './styles';

function Menu() {
  return (
    <Container>
      <Code>
        <QrCode
          value="https://github.com/jhonatanllima"
          size={80}
          fgColor="#FFF"
          bgColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do App</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}

export default Menu;
