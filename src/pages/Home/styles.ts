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
