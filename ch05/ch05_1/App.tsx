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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
  );
};

const styles = StyleSheet.create({
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
});

export default App;
