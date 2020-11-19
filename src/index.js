import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {StatusBar} from 'react-native';

import Main from '~/pages/Main';
import Pix from '~/components/Pix';
import Pay from '~/components/Pay';

import '~/config/ReactotronConfig';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Pix" component={Pix} />
      <Stack.Screen name="Pay" component={Pay} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
