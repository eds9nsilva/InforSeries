import * as React from 'react';
import Spinner from 'react-native-spinkit';
import {colors} from '../../global/styles/colors';
import Image from '../../assets/logo.png';
import {Container, Logo} from './styles';

export const Loading: React.FunctionComponent = () => {
  return (
    <Container>
      <Logo source={Image} />
      <Spinner type="FadingCircleAlt" size={55} color={colors.red} />
    </Container>
  );
};
