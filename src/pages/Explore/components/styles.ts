import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View`
  margin-top: 10%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const ContentInput = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width: 80%;
  height: 55px;
  background-color: ${({theme}) => theme.colors.gray300};
  border-radius: 14px;
`;
export const ContentIcon = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.red};
  height: 55px;
  width: 14%;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({theme}) => theme.colors.white};
  font-size: 16px;
  margin-left: 4%;
`;
export const Icon = styled(Feather)``;
