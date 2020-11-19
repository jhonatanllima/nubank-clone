import React from 'react';

import {
  Circle,
  Footer,
  Header,
  Button,
  Content,
  Container,
  TextTitle,
  TextCircle,
  TextFooter,
  WrapFooter,
  WrapCircle,
  ImageContent,
  CircleContent,
  TextDescription,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

function Pix() {
  return (
    <Container>
      <Header>
        <Button>
          <Icon name="close" size={38} color="#666" />
        </Button>
      </Header>

      <Content>
        <ImageContent />
        <TextTitle>Minha área Pix</TextTitle>
        <TextDescription>
          Tudo que você precisa pagar, transferir ou cobrar.
        </TextDescription>

        <CircleContent>
          <WrapCircle>
            <Circle>
              <Icon name="qr-code" size={24} />
            </Circle>
            <TextCircle>Pagar</TextCircle>
          </WrapCircle>

          <WrapCircle>
            <Circle>
              <Icon name="transfer-within-a-station" size={24} />
            </Circle>
            <TextCircle>Transferir</TextCircle>
          </WrapCircle>

          <WrapCircle>
            <Circle>
              <Icon name="attach-money" size={24} />
            </Circle>
            <TextCircle>Cobrar</TextCircle>
          </WrapCircle>
        </CircleContent>
      </Content>

      <Footer>
        <WrapFooter>
          <Icon name="widgets" size={35} color={'#a9a9a9'} />
          <TextFooter>Minhas chaves</TextFooter>
          <Icon
            name="keyboard-arrow-right"
            size={30}
            style={{marginLeft: 125, marginTop: 3}}
          />
        </WrapFooter>

        <WrapFooter>
          <Icon name="star" size={35} color={'#a9a9a9'} />
          <TextFooter>Promoção tem WOW nesse Pix</TextFooter>
          <Icon name="keyboard-arrow-right" size={30} style={{marginTop: 3}} />
        </WrapFooter>
      </Footer>
    </Container>
  );
}

export default Pix;
