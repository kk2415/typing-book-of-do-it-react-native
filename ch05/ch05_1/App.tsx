<<<<<<< HEAD
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
=======
import React, {useCallback, useState, type PropsWithChildren} from 'react';
import {
  Appearance,
>>>>>>> 2a9154dad4f49ad705fa5fab7d47b6f6aa5af9b9
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
<<<<<<< HEAD
=======
import { DefaultTheme, MD3DarkTheme } from 'react-native-paper';
>>>>>>> 2a9154dad4f49ad705fa5fab7d47b6f6aa5af9b9

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
<<<<<<< HEAD

import {Provider as PaperProvider} from 'react-native-paper'
import { DefaultTheme, MD3DarkTheme } from 'react-native-paper';
import { ToggleThemeProvider } from './src/contexts';
import MainNavigator from './src/screens/MainNavigator';
import { useState } from 'react';
import { useCallback } from 'react';

const App = () => {
  const schme = useColorScheme()
  const [theme, setTheme] = useState(
    schme == 'dark' ? MD3DarkTheme : DefaultTheme
  )

  const toggleTheme = useCallback(() => setTheme((theme) => (theme.dark ? DefaultTheme : MD3DarkTheme)), [])

  return (
    <PaperProvider>
      <ToggleThemeProvider toggleTheme={toggleTheme} >
        <SafeAreaView style={[{flex: 1}]} >
          <MainNavigator />
        </SafeAreaView>
      </ToggleThemeProvider>
    </PaperProvider>
=======
import MainNavigator from './src/screens/MainNavigator';

import {Provider as PaperProvider} from 'react-native-paper'
import { ToggleThemeProvider } from './src/contexts';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = useState(isDarkMode ? MD3DarkTheme : DefaultTheme)
  const toggleTheme = useCallback(() => setTheme((theme) => (theme.dark ? DefaultTheme : MD3DarkTheme)), [])

  return (
    <SafeAreaView>
      <PaperProvider theme={theme}>
        <ToggleThemeProvider toggleTheme={toggleTheme}>
          <MainNavigator />
        </ToggleThemeProvider>
      </PaperProvider>
    </SafeAreaView>
>>>>>>> 2a9154dad4f49ad705fa5fab7d47b6f6aa5af9b9
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
=======

>>>>>>> 2a9154dad4f49ad705fa5fab7d47b6f6aa5af9b9
});

export default App;
