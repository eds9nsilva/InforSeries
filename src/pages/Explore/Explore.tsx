import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {SeriesListVertical} from '../../components/SeriesListVertical/SeriesListVertical';
import {SerieContext} from '../../context/SerieContext';
import {colors} from '../../global/styles/colors';
import {
  Container,
  ContainerInput,
  Content,
  ContentIcon,
  ContentInput,
  TextInput,
  Icon,
} from './styles';
export const Explore: React.FunctionComponent = () => {
  const {series} = React.useContext(SerieContext);
  const dataRandom = series.sort(() => Math.random() - 0.5);
  const [seriesData, setSeriesData] = useState(dataRandom);
  const searchFunction = (text: string) => {
    const checkSerieExist = dataRandom.filter(series => series.name === text);
    if (checkSerieExist.length !== 0) {
      setSeriesData(checkSerieExist);
      console.log(checkSerieExist.length);
    } else {
      setSeriesData(dataRandom);
    }
  };

  return (
    <Container>
      <ContainerInput>
        <ContentInput>
          <Icon name="search" size={22} color={colors.white300} />
          <TextInput
            placeholderTextColor={colors.white300}
            placeholder="Search"
            testID="search-input"
            onChangeText={searchFunction}
          />
        </ContentInput>
        <ContentIcon>
          <Icon name="menu" size={28} color={colors.white} />
        </ContentIcon>
      </ContainerInput>
      <Content>
        <FlatList
          data={seriesData}
          keyExtractor={(item: {id: {toString: () => any}}) =>
            item.id.toString()
          }
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <SeriesListVertical data={item} />}
        />
      </Content>
    </Container>
  );
};
