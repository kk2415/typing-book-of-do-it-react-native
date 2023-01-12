import React, {useCallback, useMemo, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MD2Colors } from 'react-native-paper';

import InsideLayout from './src/screens/InsideLayout';
import Transform from './src/screens/Transform';
import Arithmetic from './src/screens/Arithmetic';
import Carousel from './src/screens/Carousel';

const App = () => {
  const selects = useMemo(() => ['transform', 'layout', 'arithmetic', 'Carousel'], [])
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
          {select == 'transform' && <Transform />}
          {select == 'layout' && <InsideLayout />}
          {select == 'arithmetic' && <Arithmetic />}
          {select == 'Carousel' && <Carousel />}
      </SafeAreaView>
);
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  topBar: {flexDirection: 'row', flexWrap: 'wrap', padding: 5, justifyContent: 'space-between', backgroundColor: MD2Colors.lightBlue500},
  button: {fontSize: 20, color: 'white'},
});

export default App;
