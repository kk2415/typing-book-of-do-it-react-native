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
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {MD2Colors} from 'react-native-paper';

const App = () => {
  return (
    // 인라인 스타일 방식
    // <SafeAreaView style={[{backgroundColor: 'red'}]}>
    //   <Text style={[{color: 'while'}]}>Hello World!</Text>
    // </SafeAreaView>

    //StyleSheet API 방식
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={[styles.text]}>Hello World!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue'},
  text: {fontSize: 20}
})

export default App;
