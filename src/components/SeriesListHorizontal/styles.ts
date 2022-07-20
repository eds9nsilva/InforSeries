import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.red};
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 200px;
  margin: 10px;
  border-radius: 44px;
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
