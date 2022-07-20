import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  background-color: transparent;
  width: 100%;
  height: 400px;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  z-index: -99;
  justify-content: center;
`;

export const ContentTop = styled.View`
  flex-direction: row;
  margin: 10%;
  justify-content: space-between;
`;

export const IconsTop = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Logo = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Content = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  margin-left: 10%;
  margin-bottom: 10%;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.white};
`;

export const ContentSubText = styled.View`
  flex-direction: row;
`;

export const SubText = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
  margin-bottom: 3%;
  margin-right: 10px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.white};
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  background-color: ${({theme}) => theme.colors.red};
  border-radius: 22px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const Linear = styled(LinearGradient)`
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`;
