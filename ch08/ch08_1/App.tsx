import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, {useCallback, useState, type PropsWithChildren} from 'react';
import {  StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import {Provider as ReduxProvider} from 'react-redux'

import { ToggleThemeProvider } from './src/contexts';
import MainNavigator from './src/screens/MainNavigator';
import { makeStore } from './src/store';

enableScreens()

const store = makeStore()
const App = () => {
  const scheme = useColorScheme()
  const [theme, setTheme] = useState(scheme === 'dark' ? DarkTheme : DefaultTheme)

  const toggleTheme = useCallback(() => setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme)), [])

  return (
    <ToggleThemeProvider toggleTheme={toggleTheme}>
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <NavigationContainer theme={theme}>
            <MainNavigator />
          </NavigationContainer>
        </ReduxProvider>
      </SafeAreaProvider>
    </ToggleThemeProvider>
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
