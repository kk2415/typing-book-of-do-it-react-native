import React, {useCallback, useState, type PropsWithChildren} from 'react';
import {
  Appearance,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { DefaultTheme, MD3DarkTheme } from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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
  );
};

const styles = StyleSheet.create({

});

export default App;
