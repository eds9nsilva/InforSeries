import * as React from 'react';
import {Button, ImageBackground, Average, AverageText} from './styles';

interface IParams {
  image: string;
  average: number;
}

export const SeriesListHorizontal: React.FC<IParams> = ({image, average}) => {
  const [loadingImage, setLoadingImage] = React.useState<boolean>();

  return (
    <Button>
      <ImageBackground
        source={{uri: image}}
        onLoadStart={() => setLoadingImage(true)}
        onLoadEnd={() => setLoadingImage(false)}>
        {average !== null && (
          <Average>
            <AverageText>{average}</AverageText>
          </Average>
        )}
      </ImageBackground>
    </Button>
  );
};
