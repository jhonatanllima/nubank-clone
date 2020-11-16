import React from 'react';

import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
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

export default function Main() {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandlerStateChange(event) {}

  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
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
                Transferência de R$ 11.122,00 recebida de alguém hoje as 15:23h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs />
    </Container>
  );
}
