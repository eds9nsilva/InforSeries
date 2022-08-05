import React, {useContext, useEffect, useState} from 'react';
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
  ViewLoading,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import Spinner from 'react-native-spinkit';
import {SerieContext} from '../../../../context/SerieContext';

interface ScreenNavigationProp {
  navigate: (screem: string, serie: ISerie) => void;
}

interface IParams {
  data: ISerie;
}

export default function ({data}: IParams) {
  const [loadingImage, setLoadingImage] = React.useState<boolean>(true);
  const {favorites, addFavorite, removeFavorite} = useContext(SerieContext);
  const [Favorite, setFavorite] = useState<ISerie | undefined>(undefined);

  const navigation = useNavigation<ScreenNavigationProp>();

  function handleNavigate() {
    navigation.navigate('Details', data);
  }

  const handlerAddFavorite = async () => {
    setFavorite(data);
    addFavorite(data);
  };
  const handlerRemoveFavorite = async () => {
    setFavorite(undefined);
    removeFavorite(data);
  };
  const handlerFavorite = () => {
    if (Favorite) {
      handlerRemoveFavorite();
    } else {
      handlerAddFavorite();
    }
  };

  useEffect(() => {
    async function checkFavoriteExist() {
      const checkFavorite = favorites.find(series => series.id === data.id);
      if (checkFavorite) {
        setFavorite(checkFavorite);
      }
    }
    checkFavoriteExist();
  }, []);

  return (
    <Container>
      {loadingImage && (
        <ViewLoading>
          <Spinner type="FadingCircleAlt" size={62} color={colors.red} />
        </ViewLoading>
      )}
      <ImageBackground
        source={{uri: data.image.original}}
        onLoad={() => setLoadingImage(false)}>
        <Linear
          colors={['transparent', colors.gray]}
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}>
          <ContentTop>
            <Logo source={logo} />
            <IconsTop>
              <Icon
                name="heart"
                size={26}
                onPress={handlerFavorite}
                color={Favorite ? colors.red : colors.white}
              />
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
