import * as React from 'react';
import Spinner from 'react-native-spinkit';
import {colors} from '../../global/styles/colors';
import Image from '../../assets/logo.png';
import {Container, Logo} from './styles';
import {SerieContext} from '../../context/SerieContext';
import {WelcomeContext} from '../../context/WelcomeContext';

import {useNavigation} from '@react-navigation/native';

interface ScreenNavigationProp {
  navigate: (screem: string) => void;
}

export const Loading: React.FunctionComponent = () => {
  const {loading} = React.useContext(SerieContext);
  const {status} = React.useContext(WelcomeContext);
  const navigation = useNavigation<ScreenNavigationProp>();
  console.log(status);
  if (loading === false) {
    if (status === false) {
      navigation.navigate('Welcome');
    } else {
      navigation.navigate('Home');
    }
  }

  return (
    <Container>
      <Logo source={Image} />
      <Spinner type="FadingCircleAlt" size={55} color={colors.red} />
    </Container>
  );
};
