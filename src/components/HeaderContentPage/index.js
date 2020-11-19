import React from 'react';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Header, Button} from './styles';

function HeaderContentPage() {
  const {navigate} = useNavigation();

  function handleNavigationToMainPage() {
    navigate('Main');
  }
  return (
    <Container>
      <Header>
        <Button onPress={handleNavigationToMainPage}>
          <Icon name="close" size={38} color="#666" />
        </Button>
      </Header>
    </Container>
  );
}

export default HeaderContentPage;
