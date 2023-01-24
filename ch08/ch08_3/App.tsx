import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import { useColorScheme } from 'react-native';
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

export default App;
