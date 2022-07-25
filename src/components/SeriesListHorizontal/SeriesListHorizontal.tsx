import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {ISerie} from '../../model/Serie';
import {Button, ImageBackground, Average, AverageText} from './styles';

interface IParams {
  data: ISerie;
}

interface ScreenNavigationProp {
  navigate: (screem: string, serie: ISerie) => void;
}

export const SeriesListHorizontal: React.FC<IParams> = ({data}) => {
  const [loadingImage, setLoadingImage] = React.useState<boolean>();

  const navigation = useNavigation<ScreenNavigationProp>();

  function handleNavigate() {
    navigation.navigate('Details', data);
  }

  return (
    <Button onPress={handleNavigate}>
      <ImageBackground
        source={{uri: data.image.medium}}
        onLoadStart={() => setLoadingImage(true)}
        onLoadEnd={() => setLoadingImage(false)}>
        {data.rating.average !== null && (
          <Average>
            <AverageText>{data.rating.average}</AverageText>
          </Average>
        )}
      </ImageBackground>
    </Button>
  );
};
