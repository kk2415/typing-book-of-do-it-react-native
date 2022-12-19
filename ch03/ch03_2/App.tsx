import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  Dimensions
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

let {width, height} = Dimensions.get('window')

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os : {Platform.OS}</Text>
      <Text style={[styles.text]}>width : {width}</Text>
      <Text style={[styles.text]}>height : {height}</Text>
      <View style={[styles.box, {borderRadius: 10}]}></View>
      <View style={[styles.box, styles.border]}></View>
      <View style={[styles.box, styles.border, {borderRadius: 10}]}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: 'blue', height: '50%', flex: 1, margin: '10%'},
  text: {fontSize: 20, marginBottom: 10, marginLeft: 50, marginTop: 20},
  box: {width: '70%', height: 100, backgroundColor: 'white', marginBottom: 10, marginLeft: Platform.select({ios: 20, android: 0})},
  border: {borderWidth: 10, borderColor: 'yellow'}
});

export default App;
