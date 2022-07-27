import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {ISerie} from '../../model/Serie';
import Spinner from 'react-native-spinkit';

import {
  Button,
  ImageBackground,
  Average,
  AverageText,
  ViewLoading,
} from './styles';
import {colors} from '../../global/styles/colors';

interface IParams {
  data: ISerie;
}

interface ScreenNavigationProp {
  navigate: (screem: string, serie: ISerie) => void;
}

export const SeriesListHorizontal: React.FC<IParams> = ({data}) => {
  const [loadingImage, setLoadingImage] = React.useState<boolean>(true);

  const navigation = useNavigation<ScreenNavigationProp>();

  function handleNavigate() {
    navigation.navigate('Details', data);
  }

  return (
    <Button onPress={handleNavigate}>
      {loadingImage && (
        <ViewLoading>
          <Spinner type="FadingCircleAlt" size={55} color={colors.white} />
        </ViewLoading>
      )}
      <ImageBackground
        source={{uri: data.image.medium}}
        onLoad={() => setLoadingImage(false)}>
        {data.rating.average !== null && (
          <Average>
            <AverageText>{data.rating.average}</AverageText>
          </Average>
        )}
      </ImageBackground>
    </Button>
  );
};
