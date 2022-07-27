import * as React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {SerieContext} from '../../context/SerieContext';
import Header from './components/Header/Header';
import {SeriesListHorizontal} from '../../components/SeriesListHorizontal/SeriesListHorizontal';
import {Container, Title, ContentText, SubTitle} from './styles';

export const Home: React.FunctionComponent = () => {
  const {series} = React.useContext(SerieContext);
  const page1 = series.slice(0, 175);
  const page2 = series.slice(175, 250);

  return (
    <Container>
      <ScrollView>
        <Header data={series[242]} />
        <ContentText>
          <Title>Page view 1</Title>
          <SubTitle>See all</SubTitle>
        </ContentText>
        <FlatList
          data={page1}
          horizontal
          keyExtractor={(item: {id: {toString: () => any}}) =>
            item.id.toString()
          }
          renderItem={({item}) => <SeriesListHorizontal data={item} />}
        />
        <ContentText>
          <Title>Page view 2</Title>
          <SubTitle>See all</SubTitle>
        </ContentText>
        <FlatList
          data={page2}
          horizontal
          keyExtractor={(item: {id: {toString: () => any}}) =>
            item.id.toString()
          }
          renderItem={({item}) => <SeriesListHorizontal data={item} />}
        />
      </ScrollView>
    </Container>
  );
};
