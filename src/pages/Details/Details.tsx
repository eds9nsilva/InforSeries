import React from 'react';
import {ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ISerie} from '../../model/Serie';
import {
  Container,
  ContentTitle,
  Icon,
  ImageHeader,
  Summary,
  Title,
} from './styles';
import {colors} from '../../global/styles/colors';

export const Details: React.FunctionComponent = () => {
  const route = useRoute();
  const data = route.params as ISerie;
  return (
    <Container>
      <ScrollView>
        <ImageHeader source={{uri: data.image.medium}} />
        <ContentTitle>
          <Title>{data.name}</Title>
          <Icon name="share-2" size={28} />
        </ContentTitle>
        <Summary>{data.summary}</Summary>
      </ScrollView>
    </Container>
  );
};
