import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.red};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 280px;
  width: 50%;
`;

export const ImageBackground = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;

export const Average = styled.View`
  margin: 5%;
  width: 35px;
  height: 20px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.red};
  align-items: center;
  justify-content: center;
`;

export const AverageText = styled.Text`
  font-size: 10px;
  color: ${({theme}) => theme.colors.white};
`;

export const ViewLoading = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 99;
`;
