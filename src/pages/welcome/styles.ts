import styled from 'styled-components/native';

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({theme}) => theme.colors.gray};
`;

export const ContentText = styled.View`
  margin-bottom: 20%;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: ${({theme}) => theme.colors.white};
  z-index: 99;
  text-align: center;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
  z-index: 99;
  text-align: center;
`;
