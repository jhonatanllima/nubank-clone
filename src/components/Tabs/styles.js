import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin: 10px 0;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  padding: 10px;
  margin-left: 10px;

  justify-content: space-between;

  border-radius: 3px;
  background: rgba(255, 255, 255, 0.2);
`;

export const TabText = styled.Text`
  color: #fff;
  font-size: 13px;
`;
