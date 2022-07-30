import React from 'react';
import {FlatList} from 'react-native';
import {SeriesListVertical} from '../../components/SeriesListVertical/SeriesListVertical';
import {SerieContext} from '../../context/SerieContext';
import {Search} from './components/Search';
import {Container, Content} from './styles';
export const Explore: React.FunctionComponent = () => {
  const {series} = React.useContext(SerieContext);
  const dataRandom = series.sort(() => Math.random() - 0.5);
  return (
    <Container>
      <Search />
      <Content>
        <FlatList
          data={dataRandom}
          keyExtractor={(item: {id: {toString: () => any}}) =>
            item.id.toString()
          }
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <SeriesListVertical data={item} />}
        />
      </Content>
    </Container>
  );
};
