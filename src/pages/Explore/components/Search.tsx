import React, {useState} from 'react';
import {colors} from '../../../global/styles/colors';
import {Container, ContentIcon, ContentInput, Icon, TextInput} from './styles';
export const Search: React.FunctionComponent = () => {
  const [isFocused, setIsFocused] = useState(true);

  return (
    <Container>
      <ContentInput>
        <Icon name="search" size={22} color={colors.white300} />
        <TextInput
          placeholderTextColor={colors.white300}
          placeholder="Search"
          testID="search-input"
        />
      </ContentInput>
      <ContentIcon>
        <Icon name="menu" size={28} color={colors.white} />
      </ContentIcon>
    </Container>
  );
};
