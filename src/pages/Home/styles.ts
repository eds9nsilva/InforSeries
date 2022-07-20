import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray};
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  width: 100%;
  height: 100px;
`;

export const ContentText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 2%;
  margin-right: 2%;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.red};
`;
