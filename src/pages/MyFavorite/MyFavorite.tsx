import React from 'react';
import {FlatList} from 'react-native';
import {SeriesListVertical} from '../../components/SeriesListVertical/SeriesListVertical';
import {SerieContext} from '../../context/SerieContext';
import {Container, Content} from './styles';
export const MyFavorite: React.FunctionComponent = () => {
  const {favorites} = React.useContext(SerieContext);

  return (
    <Container>
      <Content>
        <FlatList
          data={favorites}
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
