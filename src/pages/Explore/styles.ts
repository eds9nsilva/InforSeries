import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray};
  padding: 10px;
`;

export const Content = styled.View`
  margin-top: 8%;
`;
