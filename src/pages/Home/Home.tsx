import * as React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {SerieContext} from '../../context/SerieContext';
import Header from './components/Header/Header';
import {useNavigation} from '@react-navigation/native';
import {SeriesListHorizontal} from '../../components/SeriesListHorizontal/SeriesListHorizontal';
import {Container, Title, ContentText, SubTitle} from './styles';
import {ISerie} from '../../model/Serie';
import {filterSeries} from '../../utils/FilterSeries';

interface ScreenNavigationProp {
  navigate: (screem: string, serie: ISerie[]) => void;
}

export const Home: React.FunctionComponent = () => {
  const {series} = React.useContext(SerieContext);

  const action = filterSeries('Action', series);
  const drama = filterSeries('Drama', series);
  const romance = filterSeries('Romance', series);
  const horror = filterSeries('Horror', series);
  const fantasy = filterSeries('Fantasy', series);

  const navigation = useNavigation<ScreenNavigationProp>();

  function handleNavigate(data: ISerie[]) {
    navigation.navigate('SeeAll', data);
  }
  const numberIdSerie = Math.floor(Math.random() * series.length);
  return (
    <Container>
      <ScrollView>
        <Header data={series[numberIdSerie]} />
        <ContentText>
          <Title>Action</Title>
          <SubTitle onPress={() => handleNavigate(action)}>See all</SubTitle>
        </ContentText>
        <FlatList
          data={action}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <SeriesListHorizontal data={item} />}
        />
        <ContentText>
          <Title>Drama</Title>
          <SubTitle onPress={() => handleNavigate(drama)}>See all</SubTitle>
        </ContentText>
        <FlatList
          data={drama}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <SeriesListHorizontal data={item} />}
        />
        <ContentText>
          <Title>Romance</Title>
          <SubTitle onPress={() => handleNavigate(romance)}>See all</SubTitle>
        </ContentText>
        <FlatList
          data={romance}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <SeriesListHorizontal data={item} />}
        />
        <ContentText>
          <Title>Horror</Title>
          <SubTitle onPress={() => handleNavigate(horror)}>See all</SubTitle>
        </ContentText>
        <FlatList
          data={horror}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <SeriesListHorizontal data={item} />}
        />
        <ContentText>
          <Title>Fantasy</Title>
          <SubTitle onPress={() => handleNavigate(fantasy)}>See all</SubTitle>
        </ContentText>
        <FlatList
          data={fantasy}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <SeriesListHorizontal data={item} />}
        />
      </ScrollView>
    </Container>
  );
};
