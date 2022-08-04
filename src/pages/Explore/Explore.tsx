import React, {useState, useRef} from 'react';
import {FlatList, Animated, ScrollView} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Button} from '../../components/Button/Button';
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
  Text,
  Icon,
  ContentFilter,
  ContainerModalize,
  ButtonCategory,
  ContentModalize,
  TextCategory,
  ViewButton,
  TextCategoryIsSelect,
  ButtonCategoryIsSelect,
} from './styles';
export const Explore: React.FunctionComponent = () => {
  const {series, getSeries} = React.useContext(SerieContext);
  const [numberPage, setNumberPage] = useState<number>(2);
  const [selectCategory, setSelectCategory] = useState<string[]>([]);

  const dataRandom = series.sort(() => Math.random() - 0.5);
  const [seriesData, setSeriesData] = useState(dataRandom.slice(0, 20));

  const modalizeRef = useRef<Modalize>(null);
  const animated = useRef(new Animated.Value(0)).current;

  const searchSeries = (text: string) => {
    const checkSerieExist = dataRandom.filter(series => series.name === text);
    if (checkSerieExist.length !== 0) {
      setSeriesData(checkSerieExist);
    } else {
      setSeriesData(dataRandom);
    }
  };

  const getNewSeries = async () => {
    const dataGetNewSeries = await getSeries(numberPage);
    setSeriesData(dataGetNewSeries);
    seriesData.length;
    setNumberPage(numberPage + 1);
  };

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };

  const addSelectCategory = (name: string) => {
    const newListCategorySelect = [...selectCategory, name];
    setSelectCategory(newListCategorySelect);
  };

  const removeSelectCategory = (name: string) => {
    const newListCategory = selectCategory.filter(
      isSelect => isSelect !== name,
    );
    setSelectCategory(newListCategory);
  };

  const handlerCategory = (name: string) => {
    const isCategorySelect = selectCategory.find(isSelect => isSelect === name);
    if (isCategorySelect === undefined) {
      addSelectCategory(name);
    } else {
      removeSelectCategory(name);
    }
  };

  const checkCategory = (name: string) => {
    const isCategorySelect = selectCategory.find(isSelect => isSelect === name);
    if (isCategorySelect !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const dataCategory = [
    {
      name: 'Action',
    },
    {
      name: 'Crime',
    },
    {
      name: 'Science-Fiction',
    },
    {
      name: 'Drama',
    },
    {
      name: 'Horror',
    },
    {
      name: 'Romance',
    },
    {
      name: 'Music',
    },
    {
      name: 'Fantasy',
    },
    {
      name: 'Adventure',
    },
  ];

  return (
    <Container>
      <ContainerInput>
        <ContentInput>
          <TextInput
            placeholderTextColor={colors.white300}
            placeholder="Search"
            testID="search-input"
            onChangeText={searchSeries}
          />
        </ContentInput>
        <ContentIcon>
          <Icon name="search" size={24} color={colors.white} />
        </ContentIcon>
      </ContainerInput>
      <Content>
        <ContentFilter onPress={onOpen}>
          <Icon name="menu" size={24} color={colors.red} />
          <Text>Filter</Text>
        </ContentFilter>
        <FlatList
          data={dataRandom}
          keyExtractor={(item: {id: {toString: () => any}}) =>
            item.id.toString()
          }
          onEndReached={() => getNewSeries()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <SeriesListVertical data={item} />}
        />
      </Content>
      <Modalize
        panGestureAnimatedValue={animated}
        modalStyle={{backgroundColor: colors.gray}}
        adjustToContentHeight
        ref={modalizeRef}>
        <ContainerModalize>
          <TextCategory onPress={onClose}>Select category series</TextCategory>
          <ContentModalize>
            <ScrollView horizontal>
              {dataCategory.map(category => {
                return (
                  <>
                    {checkCategory(category.name) ? (
                      <ButtonCategoryIsSelect
                        onPress={() => handlerCategory(category.name)}>
                        <ViewButton>
                          <Icon name="x" size={12} color={colors.red} />
                        </ViewButton>
                        <TextCategoryIsSelect>
                          {category.name}
                        </TextCategoryIsSelect>
                      </ButtonCategoryIsSelect>
                    ) : (
                      <ButtonCategory
                        onPress={() => handlerCategory(category.name)}>
                        <TextCategory>{category.name}</TextCategory>
                      </ButtonCategory>
                    )}
                  </>
                );
              })}
            </ScrollView>
          </ContentModalize>
          <Button title="Ok" />
        </ContainerModalize>
      </Modalize>
    </Container>
  );
};
