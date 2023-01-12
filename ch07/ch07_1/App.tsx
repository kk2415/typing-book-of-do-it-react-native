import 'react-native-gesture-handler'
import React, {useCallback, useState } from 'react';
import { enableScreens } from 'react-native-screens'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToggleThemeProvider } from './src/contexts';
import MainNavigator from './src/screens/MainNavigator';

enableScreens()

const App = () => {
  const scheme = useColorScheme()
  const [theme, setTheme] = useState(scheme === 'dark' ? DarkTheme : DefaultTheme)

  const toggleTheme = useCallback(() => setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme)), [])

  return (
    <ToggleThemeProvider toggleTheme={toggleTheme}>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ToggleThemeProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
