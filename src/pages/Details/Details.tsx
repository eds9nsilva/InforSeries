import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ISerie} from '../../model/Serie';
import Header from '../Home/components/Header/Header';
import {Container} from './styles';

export const Details: React.FunctionComponent = () => {
  const route = useRoute();
  const data = route.params as ISerie;
  return (
    <Container>
      <Header data={data} />
    </Container>
  );
};
