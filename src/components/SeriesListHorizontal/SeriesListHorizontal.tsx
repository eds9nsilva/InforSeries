import * as React from 'react';
import {
  Button,
  Container,
  ImageBackground,
  Average,
  AverageText,
} from './styles';

interface IParams {
  image: string;
  average: number;
}

export const SeriesListHorizontal: React.FC<IParams> = ({image, average}) => {
  return (
    <Button>
      <ImageBackground source={{uri: image}}>
        {average !== null && (
          <Average>
            <AverageText>{average}</AverageText>
          </Average>
        )}
      </ImageBackground>
    </Button>
  );
};
