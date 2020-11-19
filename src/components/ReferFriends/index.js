import React from 'react';

import HeaderContentPage from '~/components/HeaderContentPage';

import {
  Container,
  Wrap,
  TextTitle,
  TextSub,
  TabFriends,
  TextButton,
} from './styles';

function ReferFriends() {
  return (
    <Container>
      <HeaderContentPage />

      <Wrap>
        <TextTitle>Resgate seus amigos da fila do banco</TextTitle>
        <TextSub>
          Para cada indicação aceita, um amigo salvo da burocracia
        </TextSub>

        <TabFriends>
          <TextButton>Indicar amigos</TextButton>
        </TabFriends>
      </Wrap>
    </Container>
  );
}

export default ReferFriends;
