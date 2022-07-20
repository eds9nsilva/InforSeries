/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {colors} from '../../../../global/styles/colors';
import {ISerie} from '../../../../model/Serie';
import logo from '../../../../assets/logo.png';
import {
  Button,
  Container,
  Content,
  Icon,
  ImageBackground,
  SubText,
  TextButton,
  Title,
  ContentSubText,
  Linear,
  Logo,
  ContentTop,
  IconsTop,
} from './styles';
import {useNavigation} from '@react-navigation/native';

interface ScreenNavigationProp {
  navigate: (screem: string, serie: ISerie) => void;
}

interface IParams {
  data: ISerie;
}

export default function ({data}: IParams) {
  const navigation = useNavigation<ScreenNavigationProp>();

  function handleNavigate() {
    navigation.navigate('Details', data);
  }

  return (
    <Container>
      <ImageBackground source={{uri: data.image.original}}>
        <Linear
          colors={['transparent', colors.gray]}
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}>
          <ContentTop>
            <Logo source={logo} />
            <IconsTop>
              <Icon name="search" size={26} style={{marginRight: 16}} />
              <Icon name="heart" size={26} />
            </IconsTop>
          </ContentTop>
          <Content>
            <Title>{data.name}</Title>
            <ContentSubText>
              <SubText>{data.language}</SubText>
              <SubText>{data.rating.average}</SubText>
              <Icon name="star" size={24} />
            </ContentSubText>
            <Button onPress={() => handleNavigate()}>
              <Icon name="play-circle" size={24} />
              <TextButton>View details</TextButton>
            </Button>
          </Content>
        </Linear>
      </ImageBackground>
    </Container>
  );
}
