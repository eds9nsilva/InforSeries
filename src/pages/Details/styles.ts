import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray};
`;

export const ImageHeader = styled.Image`
  width: 100%;
  height: 400px;
`;

export const Linear = styled(LinearGradient)`
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`;

export const ContentTitle = styled.View`
  flex-direction: row;
  margin: 5%;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.white};
`;

export const Summary = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.white};
  text-align: left;
  margin-left: 5%;
  margin-right: 5%;
`;
