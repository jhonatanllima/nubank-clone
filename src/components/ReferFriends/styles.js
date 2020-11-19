import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Wrap = styled.View`
  padding: 0 20px;
`;

export const TextTitle = styled.Text`
  margin-top: 10px;

  font-size: 25px;
  font-weight: bold;
`;

export const TextSub = styled.Text`
  margin-top: 10px;

  color: #999;
  font-size: 18px;
`;

export const TabFriends = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 140px;
  height: 45px;
  margin-top: 15px;
  border-radius: 4px;
  border: 1px solid #612f74;
`;

export const TextButton = styled.Text`
  color: #612f74;
  font-size: 14px;
  font-weight: bold;

  text-transform: uppercase;
`;
