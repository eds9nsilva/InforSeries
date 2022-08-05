import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, useWindowDimensions, Share, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import ReadMore from '@fawazahmed/react-native-read-more';
import {ISerie} from '../../model/Serie';
import {SerieContext} from '../../context/SerieContext';
import {Rating} from 'react-native-ratings';
import {
  Container,
  Content,
  ContentDetails,
  ContentIcon,
  ContentRating,
  ContentTitle,
  Icon,
  ImageHeader,
  Text,
  Title,
  ViewLoading,
} from './styles';
import {colors} from '../../global/styles/colors';
import Spinner from 'react-native-spinkit';
import api from '../../services/api';
import {Cast} from './components/Cast/Cast';

export const Details: React.FunctionComponent = () => {
  const {favorites, addFavorite, removeFavorite} = useContext(SerieContext);
  const [loadingImage, setLoadingImage] = useState<boolean>(true);
  const [Favorite, setFavorite] = useState<ISerie | undefined>(undefined);
  const [cast, setCast] = useState<any>([]);
  const route = useRoute();
  const data = route.params as ISerie;

  const {width} = useWindowDimensions();
  const source = {
    html: `${data.summary}`,
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
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
  const checkFavoriteExist = () => {
    const checkFavorite = favorites.find(series => series.id === data.id);
    if (checkFavorite) {
      setFavorite(checkFavorite);
    }
  };
  useEffect(() => {
    async function getCast() {
      try {
        checkFavoriteExist();
        const casts = await api.get(`/shows/${data.id}/cast`);
        setCast(casts.data);
      } catch (error) {
        throw new Error(error as string);
      }
    }
    getCast();
  }, []);

  return (
    <Container>
      <ScrollView>
        {loadingImage && (
          <ViewLoading>
            <Spinner type="FadingCircleAlt" size={66} color={colors.red} />
          </ViewLoading>
        )}
        <ImageHeader
          source={{uri: data.image.original}}
          resizeMode="contain"
          onLoadEnd={() => setLoadingImage(false)}
        />
        <Content>
          <ContentIcon>
            <Icon
              name="bookmark"
              size={28}
              color={Favorite ? colors.red : colors.white}
              onPress={handlerFavorite}
            />
            <Icon
              name="share-2"
              size={28}
              style={{marginLeft: 16}}
              onPress={onShare}
              color={colors.white}
            />
          </ContentIcon>
          <ContentTitle>
            <Title>{data.name}</Title>
          </ContentTitle>
          {data.rating.average !== null && (
            <ContentRating>
              <Rating
                type="custom"
                readonly
                imageSize={16}
                startingValue={data.rating.average}
                tintColor={colors.gray}
                ratingCount={10}
              />
              <Text style={{marginLeft: 14}}>{data.rating.average}/10</Text>
            </ContentRating>
          )}
          <ContentDetails>
            <Text>Language: {data.language}</Text>
            {data.genres && (
              <Text style={{marginLeft: 14}}>
                Genres: {data.genres.join(', ')}
              </Text>
            )}
          </ContentDetails>
        </Content>
        <RenderHtml
          contentWidth={width}
          source={source}
          baseStyle={{color: colors.white, marginLeft: 10, marginRight: 10}}
        />
        {cast && (
          <FlatList
            data={cast}
            horizontal
            keyExtractor={item => item.person.id.toString()}
            renderItem={({item}) => <Cast data={item} />}
          />
        )}
      </ScrollView>
    </Container>
  );
};
