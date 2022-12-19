import React from 'react';
import {
  Alert, Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import { MD2Colors } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TopBar from "./src/screens/TopBar";
import Content from "./src/screens/Content";
import BottomBar from "./src/screens/BottomBar";

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.flex}>
        {/*<Icon name="home" size={50} color={MD2Colors.lightBlue500} onPress={onIconPressed}></Icon>*/}
        <TopBar />
        <Content />
        <BottomBar />
      </SafeAreaView>
      <View style={[styles.absoluteView]}>
        <Icon name="feather" size={50} color="white" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: MD2Colors.lightBlue100},
  view: {padding: 5, backgroundColor: MD2Colors.blue900},
  text: {fontSize: 20, color: 'white'},
  absoluteView: {
    backgroundColor: MD2Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios: 100, android: 80}),
    padding: 10,
    borderRadius: 35,
  },
});

export default App;
