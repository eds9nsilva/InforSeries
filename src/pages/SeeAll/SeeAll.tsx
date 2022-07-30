import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {SeriesListVertical} from '../../components/SeriesListVertical/SeriesListVertical';
import {ISerie} from '../../model/Serie';
import {Container} from './styles';

export const SeeAll: React.FunctionComponent = () => {
  const route = useRoute();
  const data = route.params as ISerie;
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item: {id: {toString: () => any}}) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <SeriesListVertical data={item} />}
      />
    </Container>
  );
};
