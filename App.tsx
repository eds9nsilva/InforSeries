import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import {Routes} from './src/routes';
import {SerieContextProvider} from './src/context/SerieContext';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent style="light" />
      <ThemeProvider theme={theme}>
        <SerieContextProvider>
          <Routes />
        </SerieContextProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
