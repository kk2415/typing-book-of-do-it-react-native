import React, {useCallback, useMemo, useState, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { MD2Colors } from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Basic from './src/screens/Basic';
import Interpolate from './src/screens/Interpolate';
import MainNavigator from './src/screens/MainNavigator';
import Monitor from './src/screens/Monitor';
import Toggle from './src/screens/Toggle';

const App = () => {
  const selects = useMemo(() => ['basic', 'monitor', 'toggle', 'interpolate'], [])
  const [select, setSelect] = useState<string>(selects[0])
  const onPress = useCallback((text: string) => () => setSelect(text), [])
  const button = useMemo(() => (
      selects.map((text) => (
          <Text key={text} onPress={onPress(text)} style={styles.button}>
              {text}
          </Text>
      ))
  ), [])

  return (
      <SafeAreaView style={[styles.safeAreaView]} >
          <View style={styles.topBar}>{button}</View>
          {select == 'basic' && <Basic />}
          {select == 'monitor' && <Monitor />}
          {select == 'toggle' && <Toggle />}
          {select == 'interpolate' && <Interpolate />}
      </SafeAreaView>
);
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  topBar: {flexDirection: 'row', flexWrap: 'wrap', padding: 5, justifyContent: 'space-between', backgroundColor: MD2Colors.lightBlue500},
  button: {fontSize: 20, color: 'white'},
});

export default App;
