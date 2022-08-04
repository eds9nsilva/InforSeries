import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  background-color: ${({theme}) => theme.colors.red};
  padding: 18px;
  margin-top: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.white};
`;
