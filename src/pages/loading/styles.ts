import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray};
  justify-content: space-evenly;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: -18%;
  width: 200px;
  height: 200px;
`;
