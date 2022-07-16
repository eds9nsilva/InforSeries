import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray};
  justify-content: space-evenly;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: -60px;
  width: 150px;
  height: 150px;
`;
