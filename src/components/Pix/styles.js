import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  background: #fff;
`;

export const Content = styled.ScrollView`
  flex: 1;

  padding: 0 20px;
`;

export const ImageContent = styled.Image`
  width: 150px;
  height: 150px;
  margin: 10px 0;
  border-radius: 4px;

  background-color: #e9e9e9;
`;

export const TextTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const TextDescription = styled.Text`
  font-size: 19px;
  color: #999;
`;

export const CircleContent = styled.View`
  width: 100%;
  height: 120px;

  flex-direction: row;
`;

export const WrapCircle = styled.View`
  width: 100px;
  height: 110px;
  margin-top: 5px;
  margin-left: 5px;

  align-items: center;
  justify-content: center;
`;
export const Circle = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 100px;

  align-items: center;
  justify-content: center;

  background: #e9e9e9;
`;
export const TextCircle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const Footer = styled.View`
  bottom: 0;

  width: 100%;
  height: 200px;

  background: #e9e9e9;
`;

export const WrapFooter = styled.View`
  padding: 40px 20px 0 20px;

  flex-direction: row;
  justify-content: flex-start;
`;

export const TextFooter = styled.Text`
  margin: 5px 0 0 10px;

  font-size: 18px;
  font-weight: bold;
`;
