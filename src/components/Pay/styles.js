import styled from 'styled-components/native';

export const Container = styled.View``;

export const WrapContent = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 245px;
  margin: 15px 0;
  padding: 0px 20px;
`;

export const TextContent = styled.Text`
  top: -14px;
  left: -20px;
  font-size: 19px;
  font-weight: bold;
`;

export const SubContent = styled.View`
  width: 100%;
  height: 40px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const SubTextContent = styled.Text`
  top: -20px;

  padding: 0 30px 0 45px;

  font-size: 16px;
`;
export const Border = styled.View`
  width: 100%;
  height: 1px;

  background: #c9c9c9;
`;
