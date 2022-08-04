import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray};
  padding: 10px;
`;

export const ContainerInput = styled.View`
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

export const ContentFilter = styled.TouchableOpacity`
  flex-direction: row;
  margin: 4%;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.red};
`;

export const Content = styled.View`
  margin-top: 4%;
`;

export const ContainerModalize = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
`;

export const ButtonCategory = styled.TouchableOpacity`
  border-radius: 20px;
  border: 2px;
  border-color: ${({theme}) => theme.colors.white};
  align-items: center;
  background-color: ${({theme}) => theme.colors.gray300};
  justify-content: center;
  margin: 10px;
  padding: 8px;
`;

export const TextCategory = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
`;

export const ContentModalize = styled.View`
  flex-direction: row;
  margin: 2%;
`;

export const ButtonCategoryIsSelect = styled.TouchableOpacity`
  border-radius: 20px;
  border: 2px;
  border-color: ${({theme}) => theme.colors.red};
  background-color: ${({theme}) => theme.colors.gray300};
  margin: 10px;
  padding: 8px;
`;

export const TextCategoryIsSelect = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.red};
`;

export const ViewButton = styled.View`
  z-index: 99;
  position: absolute;
  width: 14px;
  height: 14px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.white};
`;
