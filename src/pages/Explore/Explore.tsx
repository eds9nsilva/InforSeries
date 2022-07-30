import React from 'react';
import {FlatList} from 'react-native';
import {SeriesListVertical} from '../../components/SeriesListVertical/SeriesListVertical';
import {SerieContext} from '../../context/SerieContext';
import {Search} from './components/Search';
import {Container, Content} from './styles';
export const Explore: React.FunctionComponent = () => {
  const {series} = React.useContext(SerieContext);

  return (
    <Container>
      <Search />
      <Content>
        <FlatList
          data={series}
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
