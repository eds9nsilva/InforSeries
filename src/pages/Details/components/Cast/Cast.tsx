import React from 'react';
import Spinner from 'react-native-spinkit';
import {colors} from '../../../../global/styles/colors';
import {Container, Image, ViewLoading, Content, Text} from './styles';

interface IParams {
  data: any;
}

export const Cast: React.FunctionComponent<IParams> = ({data}) => {
  const [loadingImage, setLoadingImage] = React.useState<boolean>(true);
  return (
    <Container>
      {loadingImage && (
        <ViewLoading>
          <Spinner type="FadingCircleAlt" size={55} color={colors.white} />
        </ViewLoading>
      )}
      <Image
        source={{uri: data.person.image.medium}}
        onLoad={() => setLoadingImage(false)}
      />
      <Content>
        <Text>{data.person.name}</Text>
        {data.person.birthday && <Text>Birthday: {data.person.birthday}</Text>}
      </Content>
    </Container>
  );
};
