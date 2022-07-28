import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {SeriesListVertical} from '../../components/SeriesListVertical/SeriesListVertical';
import {ISerie} from '../../model/Serie';
import {Container} from './styles';

export const SeeAll: React.FunctionComponent = () => {
  const route = useRoute();
  const data = route.params as ISerie;

  const formatData = (data: any, numColumns: any) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }

    return data;
  };
  const numColumns = 2;
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item: {id: {toString: () => any}}) => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => <SeriesListVertical data={item} />}
      />
    </Container>
  );
};
