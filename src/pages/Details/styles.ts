import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray};
`;
export const Content = styled.View`
  margin-left: 5%;
  margin-right: 5%;
`;

export const ImageHeader = styled.Image`
  width: 100%;
  height: 550px;
`;

export const ContentTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
`;

export const ContentIcon = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 6%;
`;

export const Icon = styled(Feather)``;

export const ContentRating = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentDetails = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: 60%;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
`;

export const ViewLoading = styled.View`
  top: 25%;
  left: 40%;
  position: absolute;
  z-index: 99;
`;
