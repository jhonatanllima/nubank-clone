import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  padding-top: ${getStatusBarHeight()}px;

  justify-content: center;
`;

export const Content = styled.View`
  z-index: 5;

  max-height: 400px;

  flex: 1;
`;

export const Card = styled.View`
  left: 0;
  top: 380px;
  right: 0;

  position: absolute;

  flex: 1;

  height: 100%;
  margin: 0 20px;
  border-radius: 4px;

  background: #fff;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  justify-content: center;

  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Description = styled.Text`
  margin-top: 3px;

  color: #333;
  font-size: 32px;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  color: #333;
  font-size: 12px;
`;
