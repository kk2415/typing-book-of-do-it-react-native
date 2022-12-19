import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
} from 'react-native';

let {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os : {Platform.OS}</Text>
      <Text style={[styles.text]}>width : {width}</Text>
      <Text style={[styles.text]}>height : {height}</Text>
      <View style={[styles.box, {borderRadius: 10}]} />
      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border, {borderRadius: 10}]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'blue',
    height: '50%',
    flex: 1,
    margin: '10%',
  },
  text: {fontSize: 20, marginBottom: 10, marginLeft: 50, marginTop: 20},
  box: {
    width: '70%',
    height: 100,
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: Platform.select({ios: 20, android: 0}), //운영체제 별로 다른 값 적용
  },
  border: {borderWidth: 10, borderColor: 'yellow'},
});

export default App;
