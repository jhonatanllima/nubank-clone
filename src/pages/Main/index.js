import React from 'react';

import Tabs from '~/components/Tabs';
import Header from '~/components/Header';

import {Container} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
}
