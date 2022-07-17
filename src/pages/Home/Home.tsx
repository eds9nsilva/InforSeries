import React from 'react';
import {SerieContext} from '../../context/SerieContext';
import Header from './components/Header/Header';
import {Container} from './styles';

export const Home: React.FunctionComponent = () => {
  const {series} = React.useContext(SerieContext);
  return (
    <Container>
      <Header data={series[226]} />
    </Container>
  );
};
