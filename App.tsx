import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import {Routes} from './src/routes';
import {SerieContextProvider} from './src/context/SerieContext';
import {WelcomeContextProvider} from './src/context/WelcomeContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent style="light" />
      <ThemeProvider theme={theme}>
        <SerieContextProvider>
          <WelcomeContextProvider>
            <GestureHandlerRootView style={{flex: 1}}>
              <Routes />
            </GestureHandlerRootView>
          </WelcomeContextProvider>
        </SerieContextProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
