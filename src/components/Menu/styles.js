import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

export const Container = styled.ScrollView`
  margin: 0 30px;
`;

export const Code = styled.View`
  padding: 5px;

  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;
`;

export const NavItem = styled.View`
  padding: 12px 0;
  align-items: center;

  flex-direction: row;

  border-color: rgba(255, 255, 255, 0.8);
  border-bottom-width: ${StyleSheet.hairlineWidth}px; // menor que 1px.
`;

export const NavText = styled.Text`
  margin-left: 20px;

  color: #fff;
  font-size: 15px;
`;

export const SignOutButton = styled.TouchableOpacity`
  padding: 12px;
  margin-top: 15px;
  border-radius: 4px;
  align-items: center;

  justify-content: center;

  border-color: rgba(255, 255, 255, 0.8);
  border-width: ${StyleSheet.hairlineWidth}px; // menor que 1px.
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`;
