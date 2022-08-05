import styled from 'styled-components/native';

export const Container = styled.View`
  width: 220px;
  margin-left: 10px;
`;

export const Image = styled.Image`
  width: 210px;
  height: 290px;
  border-radius: 12px;
`;

export const Content = styled.View`
  margin-top: 2%;
  width: 210px;
  background-color: ${({theme}) => theme.colors.gray};
  align-items: center;
`;

export const ViewLoading = styled.View`
  position: absolute;
  z-index: 99;
  margin: 40%;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
`;
