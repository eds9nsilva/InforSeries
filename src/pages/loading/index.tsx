import * as React from 'react';
import Spinner from 'react-native-spinkit';
import {colors} from '../../global/styles/colors';
import Image from '../../assets/logo.png';
import {Container, Logo} from './styles';
import {SerieContext} from '../../context/SerieContext';
import {useNavigation} from '@react-navigation/native';

interface ScreenNavigationProp {
  navigate: (screem: string) => void;
}

export const Loading: React.FunctionComponent = () => {
  const {loading} = React.useContext(SerieContext);
  const navigation = useNavigation<ScreenNavigationProp>();

  if (loading === false) {
    navigation.navigate('Welcome');
  }

  return (
    <Container>
      <Logo source={Image} />
      <Spinner type="FadingCircleAlt" size={55} color={colors.red} />
    </Container>
  );
};
